"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv = __importStar(require("dotenv"));
const user_schema_1 = __importDefault(require("src/models/schemas/user.schema"));
const mailer_1 = require("../utils/mailer");
dotenv.config();
class authController {
    constructor() {
        this.register = async (req, res) => {
            let user = req.body;
            let Email = user.email;
            let userByEmail = await user_schema_1.default.findOne({ email: Email });
            let userByUsername = await user_schema_1.default.findOne({ username: user.username });
            if (userByUsername) {
                return res.json({ usernamemessages: "Username đã tồn tại !" });
            }
            else if (userByEmail) {
                return res.json({ emailmessages: "Email đã tồn tại !" });
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, parseInt(process.env.BCRYPT_SALT_ROUND));
                let data = {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    role: "user",
                    email_verify: "",
                    address: "",
                    phone: "",
                };
                let newUser = await user_schema_1.default.create(data, (err, user) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(user.email);
                        bcrypt_1.default
                            .hash(user.email, parseInt(process.env.BCRYPT_SALT_ROUND))
                            .then((hashedEmail) => {
                            console.log(`${process.env.APP_URL}/verify?email=${user.email}&token=${hashedEmail}`);
                            (0, mailer_1.senMail)(user.email, "Verify Email", `<a href="${process.env.APP_URL}/auth/verify?email=${user.email}&token=${hashedEmail}"> Verify </a>`);
                        });
                        return res.status(200).json({ user: newUser });
                    }
                });
            }
        };
        this.verify = (req, res) => {
            bcrypt_1.default.compare(req.query.email, req.query.token, (err, result) => {
                if (result === true) {
                    user_schema_1.default.findOneAndUpdate({ email: `${req.query.email}` }, { email_verify: Date.now() }, function (err, docs) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            res.redirect("/auth/login");
                        }
                    });
                }
                else {
                    res.redirect("/404");
                }
            });
        };
        this.login = async (req, res) => {
            let data = {
                email: req.body.email,
                password: req.body.password,
            };
            let user = await user_schema_1.default.findOne({ email: data.email });
            if (!user) {
                return res
                    .status(200)
                    .json({ message: "Đăng nhập thất bại! Vui lòng thử lại !" });
            }
            else if (!user.email_verify) {
                return res.status(200).json({
                    message: "Tài khoản chưa được xác thực. Vui lòng kiểm tra email !",
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(data.password, user.password);
                if (!comparePassword) {
                    return res
                        .status(200)
                        .json({ message: "Sai mật khẩu ! Vui lòng thử lại !" });
                }
                else {
                    let payload = {
                        username: user.username,
                        password: user.password,
                    };
                    let secretKey = process.env.SECRET_KEY;
                    let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                        expiresIn: 36000000,
                    });
                    const response = {
                        token: token,
                    };
                    return res
                        .status(200)
                        .json({ message: "Đăng nhập thành công !", data: response });
                }
            }
        };
    }
}
exports.authController = authController;
//# sourceMappingURL=auth.controller.js.map
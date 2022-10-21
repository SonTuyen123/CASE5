"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const validation_1 = require("../middleware/validation");
const user_controller_1 = require("../controllers/user.controller");
router.post("/login", (req, res, next) => {
    user_controller_1.UserController.login(req, res).catch((err) => {
        next(err);
    });
});
router.post("/register", validation_1.validateUserSignUp, validation_1.userValidation, (req, res, next) => {
    user_controller_1.UserController.register(req, res).catch((err) => {
        next(err);
    });
});
router.post("/upload", (req, res, next) => {
    user_controller_1.UserController.upload(req, res).catch((err) => {
        next(err);
    });
});
router.get("/listMp3", (req, res, next) => {
    user_controller_1.UserController.listMp3(req, res).catch((err) => {
        next(err);
    });
});
router.post("/verify", (req, res, next) => {
    user_controller_1.UserController.verify(req, res).catch((err) => {
        next(err);
    });
});
router.get("/list", async (req, res, next) => {
    user_controller_1.UserController.showList(req, res).catch((err) => {
        next(err);
    });
});
router.delete("/delete/:id", async (req, res, next) => {
    user_controller_1.UserController.deleteUsers(req, res).catch((err) => {
        next(err);
    });
});
router.get("/edit", async (req, res, next) => {
    user_controller_1.UserController.showFormEditCustomer(req, res).catch((err) => {
        next(err);
    });
});
router.post("/edit", async (req, res, next) => {
    user_controller_1.UserController.editUsers(req, res).catch((err) => {
        next(err);
    });
});
exports.default = router;
//# sourceMappingURL=user.router.js.map
import { Request, Response } from "express";
import Users from "../models/schemas/user.schema";
import ListMp3 from "../models/schemas/listmp3.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { senMail } from "../utils/mailer";
dotenv.config();

export class UserController {
  static async upload(req: Request, res: Response) {
    let data = {
      name: req.body.name,
      category: req.body.category,
      singer: req.body.singer,
      image: req.body.image,
      mp3: req.body.mp3,
      user_id: "",
    };
    console.log(
      "🚀 ~ file: user.controller.ts ~ line 19 ~ UserController ~ upload ~ data",
      data
    );
    await ListMp3.create(data, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
    return res.status(200).json({ message: "Thêm thành công !" });
  }
  static async listMp3(req: Request, res: Response) {
    const mp3list = await (await ListMp3.find()).reverse();
    return res.status(200).json({ list: mp3list });
  }

  static async login(req: Request, res: Response) {
    let data = {
      email: req.body.email,
      password: req.body.password,
    };
    let user = await Users.findOne({ email: data.email });
    console.log(
      "🚀 ~ file: user.controller.ts ~ line 44 ~ UserController ~ login ~ user",
      user
    );
    if (!user) {
      return res
        .status(200)
        .json({ message: "Đăng nhập thất bại! Vui lòng thử lại !" });
    } else if (user.email_verify === "false") {
      return res.status(200).json({
        message: "Tài khoản chưa được xác thực. Vui lòng kiểm tra email !",
      });
    } else {
      let comparePassword = await bcrypt.compare(data.password, user.password);
      if (!comparePassword) {
        return res
          .status(200)
          .json({ message: "Sai mật khẩu ! Vui lòng thử lại !" });
      } else {
        let payload = {
          username: user.username,
          password: user.password,
        };
        let secretKey = process.env.SECRET_KEY;
        let token = await jwt.sign(payload, secretKey, {
          expiresIn: 36000000,
        });
        const response = {
          token: token,
          user: user
        };
        return res
          .status(200)
          .json({ message: "Đăng nhập thành công !", data: response });
      }
    }
  }

  static async createCustomer(req: Request, res: Response) {
    const data = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    };
    console.log(data);
    let user = await Users.findOne({ email: data.email });
    console.log(user);
    if (user) {
      return res.status(200).json({ message: "Tài khoản đã tồn tại !" });
    } else {
      const customer = new Users(data);
      await customer.save();
      return res.status(200).json({ message: "Create thanh cong" });
    }
  }
  static async showList(req: Request, res: Response) {
    const customer = await Users.find();
    return res.status(200).json({ user: customer });
  }
  static async findUser(req: Request, res: Response) {
    let id = req.params.id;

    let User = await Users.findOne({
      _id: id,
    });

    return res.status(200).json({ user: User });
  }

  static async UploadImgUser(req: Request, res: Response) {
    let data = req.body;
    console.log(data);
    let id = data.id;

    await Users.updateOne(
      { _id: id },
      {
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        email_verify: data.email_verify,
        image: data.image,
      }
    );

    return res.status(200).json({ message: "edit thanh cong !" });
  }

  static async deleteUsers(req: Request, res: Response) {
    let id = req.body.id;
    await Users.deleteOne({
      _id: `${id}`,
    });
    return res.status(200).json({ message: "delete thanh cong" });
  }
  static async deleteMp3(req: Request, res: Response) {
    let id = req.body.id;
    await ListMp3.deleteOne({
      _id: `${id}`,
    });
    return res.status(200).json({ message: "delete mp3 thanh cong" });
  }


  static async showFormEditCustomer(req: Request, res: Response) {
    let id = req.query.id;
    const custormerSelect = await Users.findOne({
      _id: id,
    });
    return res.status(200);
  }
  static async editUsers(req: Request, res: Response) {
    let id = req.body.id;
    await Users.updateOne(
      { _id: id },
      {
        name: req.body.name,
        code: req.body.code,
        age: req.body.age,
        department: req.body.department,
      }
    );

    return res.status(200);
  }

  static async register(req: Request, res: Response) {
    let user = req.body;
    let Email = user.email;
    let userByEmail = await Users.findOne({ email: Email });
    let userByUsername = await Users.findOne({ username: user.username });
    if (userByUsername) {
      return res.json({ message: "Username đã tồn tại !" });
    } else if (userByEmail) {
      return res.json({ message: "Email đã tồn tại !" });
    } else {
      user.password = await bcrypt.hash(
        user.password,
        parseInt(process.env.BCRYPT_SALT_ROUND)
      );

      let data = {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        password: user.password,
        email_verify: false,
      };

      let newUser = await Users.create(data, (err, user) => {
        if (err) {
          console.log(err);
        } else {
          bcrypt
            .hash(user.email, parseInt(process.env.BCRYPT_SALT_ROUND))
            .then((hashedEmail) => {
              console.log(
                `${process.env.APP_URL}/verify?email=${user.email}&token=${hashedEmail}`
              );
              senMail(
                user.email,
                "Verify Email",
                `<div style="padding: 10px; background-color: blue">
                <div style="padding: 10px; background-color: white;">
                    <h4 style="color: #ee1414; width: 100%; text-align: center; font-size: 20px;">Click here</h4>
                    <div style="color: black; font-size: 35px; width: 100%; text-align: center; height: 50px;"><a href="${process.env.APP_URL}/register/verify?email=${user.email}&token=${hashedEmail}"> Verify </a></div>
                </div>
                </div> `
              );
              return res.status(200).json({
                email: user.email,
                token: hashedEmail,
              });
            });
        }
      });
    }
  }
  static async verify(req: Request, res: Response) {
    console.log(req.body);
    bcrypt.compare(req.body.email, req.body.token, (err, result) => {
      if (result === true) {
        Users.findOneAndUpdate(
          { email: `${req.body.email}` },
          { email_verify: true },
          function (err, docs) {
            if (err) {
              console.log(err);
            } else {
              console.log(1);
              return res.status(200).json({ message: "verify thanh cong!" });
            }
          }
        );
      } else {
        return res.status(200).json({ message: "404" });
      }
    });
  }
}

export default new UserController();

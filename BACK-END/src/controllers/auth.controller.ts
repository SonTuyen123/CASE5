import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import express from "express";

import * as dotenv from "dotenv";
import Users from "src/models/schemas/user.schema";
import { senMail } from "../utils/mailer";
dotenv.config();
export class authController {
  register = async (req: Request, res: Response) => {
    let user = req.body;
    let Email = user.email;
    let userByEmail = await Users.findOne({ email: Email });
    let userByUsername = await Users.findOne({ username: user.username });
    // console.log(userByEmail)
    // console.log(userByUsername);
    if (userByUsername) {
      return res.json({ usernamemessages: "Username đã tồn tại !" });
    } else if (userByEmail) {
      return res.json({ emailmessages: "Email đã tồn tại !" });
    } else {
      user.password = await bcrypt.hash(
        user.password,
        parseInt(process.env.BCRYPT_SALT_ROUND)
      );

      let data = {
        username: user.username,
        email: user.email,
        password: user.password,
        role: "user",
        email_verify: "",
        address: "",
        phone: "",
      };
      let newUser = await Users.create(data, (err, user) => {
        // console.log(user);
        if (err) {
          console.log(err);
        } else {
          console.log(user.email);
          bcrypt
            .hash(user.email, parseInt(process.env.BCRYPT_SALT_ROUND))
            .then((hashedEmail) => {
              console.log(
                `${process.env.APP_URL}/verify?email=${user.email}&token=${hashedEmail}`
              );
              senMail(
                user.email,
                "Verify Email",
                `<a href="${process.env.APP_URL}/auth/verify?email=${user.email}&token=${hashedEmail}"> Verify </a>`
              );
            });
          return res.status(200).json({ user: newUser });
        }
      });
    }
  };

  verify = (req: any, res: any) => {
    bcrypt.compare(req.query.email, req.query.token, (err, result) => {
      if (result === true) {
        Users.findOneAndUpdate(
          { email: `${req.query.email}` },
          { email_verify: Date.now() },
          function (err, docs) {
            if (err) {
              console.log(err);
            } else {
              res.redirect("/auth/login");
            }
          }
        );
      } else {
        res.redirect("/404");
      }
    });
  };
  checkLogin = (req: Request, res: Response) => {
    res.render("product/login/checkLogin");
  };
}

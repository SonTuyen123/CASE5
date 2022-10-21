import express from "express";
import { Router, Request, Response } from "express";
const router = express.Router();
import { userValidation, validateUserSignUp } from "../middleware/validation";

import { UserController } from "../controllers/user.controller";

router.post("/login", (req, res, next) => {
  UserController.login(req, res).catch((err) => {
    next(err);
  });
});
router.post(
  "/register",
  validateUserSignUp,
  userValidation,
  (req, res, next) => {
    UserController.register(req, res).catch((err) => {
      next(err);
    });
  }
);

router.post("/upload", (req, res, next) => {
  UserController.upload(req, res).catch((err) => {
    next(err);
  });
});
router.get("/listMp3", (req, res, next) => {
  UserController.listMp3(req, res).catch((err) => {
    next(err);
  });
});
router.post("/verify", (req, res, next) => {
  UserController.verify(req, res).catch((err) => {
    next(err);
  });
});
router.get("/list", async (req, res, next) => {
  UserController.showList(req, res).catch((err) => {
    next(err);
  });
});
router.delete("/delete/:id", async (req, res, next) => {
  UserController.deleteUsers(req, res).catch((err) => {
    next(err);
  });
});
router.get("/edit", async (req, res, next) => {
  UserController.showFormEditCustomer(req, res).catch((err) => {
    next(err);
  });
});
router.post("/edit", async (req, res, next) => {
  UserController.editUsers(req, res).catch((err) => {
    next(err);
  });
});

export default router;

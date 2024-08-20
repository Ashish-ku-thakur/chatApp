import express from "express";
import {
  GetotherUsers,
  Login,
  logout,
  Register,
} from "../controllers/userControllers.js";
import { Isauthentication } from "../middelware/authentication.js";

let router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/otherUsers").get(Isauthentication, GetotherUsers);

export default router;

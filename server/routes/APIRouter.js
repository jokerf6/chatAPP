import Router from "express";
const router = Router();
import register from "./register.js";
import login from "./login.js";
import home from "./home.js";
router.use("/register", register);
router.use("/login", login);
router.use("/user", home);
export default router;

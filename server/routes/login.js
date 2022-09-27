import Router from "express";
const router = Router();
import login from "../controller/login.js";
router.post("/", login);
export default router;

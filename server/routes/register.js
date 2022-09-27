import Router from "express";
const router = Router();
import register from "../controller/register.js";
router.post("/", register);
export default router;

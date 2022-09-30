import Router from "express";
const router = Router();
import home from "../controller/home.js";
router.get("/", home);
export default router;

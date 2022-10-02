import Router from "express";
const router = Router();
import home from "../controller/home.js";
import message from "../controller/message.js";
import allMessages from "../controller/allMessages.js";

router.get("/", home);

router.post("/message", message);
router.get("/messages/:senderId/:recieverId", allMessages);
export default router;

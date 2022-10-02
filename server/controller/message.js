import response from "../util/response.js";
async function message(req, res, next) {
  try {
    const { userMessages } = req.models;
    const token = req;
    const { senderId, message, recieverId } = req.body;
    console.log(senderId, message, recieverId);
    const Message = await userMessages.create({
      senderId: senderId,
      recieverId: recieverId,
      message: "message",
      createdAt: Date.now(),
    });
    return response.success(res, "message sent successfully", Message);
  } catch (err) {
    next(err);
  }
}
export default message;

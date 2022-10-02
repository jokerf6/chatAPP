import response from "../util/response.js";
async function allMessages(req, res, next) {
  try {
    const { userMessages } = req.models;
    const { recieverId, senderId } = req.params;
    const sender = await userMessages.findAll({
      where: {
        senderId: senderId,
        recieverId: recieverId,
      },
    });
    const reciever = await userMessages.findAll({
      where: {
        senderId: recieverId,
        recieverId: senderId,
      },
    });
    let messages = [...sender, ...reciever];
    messages.sort((a, b) => {
      return a.createdAt > b.createdAt ? 1 : -1;
    });
    return response.success(res, "message sent successfully", messages);
  } catch (err) {
    next(err);
  }
}
export default allMessages;

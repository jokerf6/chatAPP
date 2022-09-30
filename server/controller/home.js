import responses from "../util/response.js";
async function getAllUser(req, res, next) {
  const { user } = req.models;
  const users = await user.findAll();
  return responses.success(res, "get all user sucessfully", users);
}
export default getAllUser;

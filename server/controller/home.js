import responses from "../util/response.js";
async function getAllUser(req, res, next) {
  const { users } = req.models;
  const user = await users.findAll();
  return responses.success(res, "get all user sucessfully", user);
}
export default getAllUser;

import bcrypt from "bcrypt";
import Responses from "../util/response.js";
async function login(req, res, next) {
  const { email, password } = req.body;
  const { user } = req.models;
  const userExist = await user.findOne({
    where: {
      email,
    },
  });
  if (!userExist) {
    return Responses.badRequest(res, "user not found", null);
  }
  const valid = bcrypt.compare(password, userExist.password);
  if (!valid) {
    return Responses.badRequest(res, "Pawword is incorrect", null);
  }
  return Responses.success(res, "logged in Successfully", userExist);
}

export default login;

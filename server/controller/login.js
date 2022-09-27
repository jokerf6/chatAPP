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
    return Responses.badRequest(res, "user not found", "user not found");
  }
  console.log(userExist.password, password);
  const valid = await bcrypt.compare(password, userExist.password);
  console.log(valid);
  if (!valid) {
    return Responses.badRequest(
      res,
      "Pawword is incorrect",
      "Pawword is incorrect"
    );
  }
  return Responses.success(res, "logged in Successfully", userExist);
}

export default login;

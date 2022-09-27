import responses from "../util/response.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
const joiPassword = Joi.extend(joiPasswordExtendCore);

const validateBody = (body) => {
  const objectSchema = Joi.object({
    username: Joi.string()
      .min(3)
      .max(32)
      .required()
      .trim()
      .pattern(/^[a-zA-Z\s]*$/)
      .message({
        "string.empty": "firstname cannot be empty",
        "string.min":
          "firstname length must be equal or higher than 3 characters",
        "string.max": "firstname length not exceed 32 characters",
      }),
    email: Joi.string().trim().email().required().messages({
      "string.empty": `email cannot be empty`,
      "string.email": `email must be a valid email address`,
      "any.required": `email is a required field`,
    }),
    password: joiPassword
      .string()
      .min(8)
      .max(32)
      .required()
      .noWhiteSpaces()
      .minOfUppercase(1)
      .minOfLowercase(1)
      .minOfNumeric(1)
      .messages({
        "string.empty": `password cannot be empty`,
        "string.min": `password length must be equal or higher than {#limit} characters`,
        "string.max": `password length must not exceed {#limit} characters`,
        "any.required": `password is a required field`,
        "string.minOfUppercase":
          "{#label} should contain at least {#min} uppercase character",
        "string.minOfLowercase":
          "{#label} should contain at least {#min} lowercase character",
        "string.minOfNumeric":
          "{#label} should contain at least {#min} numeric character",
        "string.noWhiteSpaces": "{#label} should not contain white spaces",
      }),
  });
  return objectSchema.validate(body, { abortEarly: true });
};

async function register(req, res) {
  const validateError = validateBody(req.body);
  if (validateError.error) {
    return responses.badRequest(
      res,
      "ValidationError",
      validateError.error.details[0].message
    );
  }
  const { email, username, password } = req.body;
  const { user } = req.models;
  const valid = await user.findOne({
    where: {
      email: email,
    },
  });
  if (valid) {
    return responses.badRequest(res, "user already exist", null);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const User = await user.create({
    email,
    username,
    password: hashPassword,
  });
  return responses.success(res, "Add user Sucessfully", user);
}
export default register;

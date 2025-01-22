import { User } from "../models/user.js";
import { HttpError } from "../helpers/HttpError.js";
import { ctrWrapper } from "../helpers/ctrWrapper.js";

export const register = ctrWrapper(async (request, response) => {
  const newUser = await User.create(request.body);

  response.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
});

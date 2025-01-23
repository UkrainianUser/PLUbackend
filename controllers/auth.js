import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import { HttpError } from "../helpers/HttpError.js";
import { ctrWrapper } from "../helpers/ctrWrapper.js";

export const register = ctrWrapper(async (request, response) => {
  console.log(request);

  const { email, password } = request.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use!");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...request.body,
    password: hashPassword,
  });

  response.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
});

export const login = ctrWrapper(async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  };

  console.log(payload);

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1w" });
  await User.findByIdAndUpdate(user._id);

  response.json({
    token,
  });
});

export const getCurrent = ctrWrapper(async (request, response) => {
  const { email, name } = request.user;

  response.json({
    email,
    name,
  });
});

export const logout = ctrWrapper(async (request, response) => {
  const { _id } = request.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  response.json({
    message: "Logout success",
  });
});

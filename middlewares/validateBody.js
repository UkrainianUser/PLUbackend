import { HttpError } from "../helpers/HttpError.js";

export const validateBody = (schem) => {
  const func = (request, response, next) => {
    const { error } = Schema.validate(request.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

import { HttpError } from "../helpers/HttpError.js";

export const validateBody = (schema) => {
  const func = (request, response, next) => {
    const { error } = schema.validate(request.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

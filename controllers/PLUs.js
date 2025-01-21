import { Plu } from "../models/PLU.js";
import { ctrWrapper } from "../helpers/ctrWrapper.js";
import { HttpError } from "../helpers/HttpError.js";

export const getAll = ctrWrapper(async (request, response) => {
  const result = await Plu.find();
  response.json(result);
});

export const getById = ctrWrapper(async (request, response) => {
  const { id } = request.params;
  // const result = await Plu.findOne({ _id: id });
  const result = await Plu.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json(result);
});

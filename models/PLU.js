import { Schema, model } from "mongoose";

const pluSchema = new Schema({
  article: String,
  name: String,
  PLU: String,
});

export const Plu = model("plu", pluSchema);

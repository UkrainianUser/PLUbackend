import { Schema, model } from "mongoose";

const pluSchema = new Schema({
  articule: { type: String, required: true },
  name: { type: String, required: true },
  PLU: { type: String, required: true },
});

export const Plu = model("plu", pluSchema);

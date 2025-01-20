import express, { response } from "express";
import cors from "cors";

import allPlu from "../../db/AllPLU.json" assert { type: "json" };

const router = express.Router();

router.use(cors());

router.get("/", (request, response) => {
  response.json(allPlu);
});

router.get("/:id", (request, response) => {
  response.json(allPlu[0]);
});

router.post("/", (request, response) => {
  response.json(allPlu[0]);
});

router.put("/:id", (request, response) => {
  response.json(allPlu[0]);
});

router.delete("/:id", (request, response) => {
  response.json(allPlu[0]);
});

export default router;

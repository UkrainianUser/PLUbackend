import express, { response } from "express";
import { getAll, getById } from "../../controllers/PLUs.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

export default router;

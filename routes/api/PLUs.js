import express, { response } from "express";
import { getAll, getById } from "../../controllers/PLUs.js";
import { isValidId } from "../../middlewares/isValidId.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", isValidId, getById);

export default router;

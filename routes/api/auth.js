import express from "express";

import { register, login } from "../../controllers/auth.js";

import { validateBody } from "../../middlewares/validateBody.js";
import { loginSchema, registerSchema } from "../../models/user.js";

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);

export default router;

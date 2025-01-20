import express, { request, response } from "express";
import cors from "cors";

import PLUsRouter from "./routes/api/PLUs.js";

const app = express();

app.use(cors());

app.use("/api/PLUs", PLUsRouter);

app.use((error, request, response, next) => {
  const { status = 500, message = "Server error" } = error;
  response.status(status).json({ message });
});

export default app;

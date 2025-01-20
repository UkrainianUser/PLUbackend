import express, { response } from "express";
import cors from "cors";

import PLUsRouter from "./routes/api/PLUs.js";

const app = express();

app.use(cors());

app.use("/api/PLUs", PLUsRouter);

app.get("/", (request, response) => {
  response.send("<h2>Home page!</h2>");
});

app.listen(3003, () => console.log("Server is running!"));

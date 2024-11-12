import express from "express";
import morgan from "morgan";
import { NODE_ENV, PORT } from "./config/secrets.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${PORT} in ${NODE_ENV} mode.`
  );
});

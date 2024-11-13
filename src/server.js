import express from "express";
import morgan from "morgan";
import courseRoutes from "./routes/courseRoutes.js";
import { NODE_ENV, PORT } from "./config/secrets.js";
import { globalError, notFoundError } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/courses", courseRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Hello world!" });
});

app.use(notFoundError);
app.use(globalError);

app.listen(PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${PORT} in ${NODE_ENV} mode.`
  );
});

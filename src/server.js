import express from "express";
import morgan from "morgan";

const app = express();

process.loadEnvFile();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world!" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${process.env.PORT}`
  );
});

import express from "express";

const app = express();

process.loadEnvFile();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world!" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${process.env.PORT}`
  );
});

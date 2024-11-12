import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world!" });
});

app.listen(2024, () => {
  console.log(`Server is up and running on http://localhost:2024`);
});

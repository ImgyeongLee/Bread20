import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

// TODO: mongoose!

app.listen(PORT, () => {
  console.log("Server is listening at PORT ", PORT);
});

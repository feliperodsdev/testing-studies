import express from "express";

export const app = express();

app.use(express.json());

app.post("/lessons", (req, res) => {
  return res.status(200).send();
});

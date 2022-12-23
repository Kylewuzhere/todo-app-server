const express = require("express");
const cors = require("cors");
const todoRouter = require("./todos/todos.router");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/healthcheck", async (req, res) => {
  res.json({ message: "OK!" });
});
app.use("/api/todos", todoRouter);

module.exports = app;

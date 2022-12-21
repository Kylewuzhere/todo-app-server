const express = require("express");
const cors = require("cors");
const todoRouter = require("./todos/todos.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", todoRouter);

module.exports = app;

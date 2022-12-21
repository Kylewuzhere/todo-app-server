const { Router } = require("express");
const { createTodo } = require("./todos.repository");

const todoRouter = Router();

// Routes
// Get all todos
todoRouter.get("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

// Get single todo
todoRouter.get("/todos/:id", async (req, res) => {
  try {
    console.log("Get single todo");
  } catch (err) {
    console.error(err.message);
  }
});

// Create todo
todoRouter.post("/todos", async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newTodo = await createTodo({ title, description, status });
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// Update todo
todoRouter.put("/todos/:id", (req, res) => {
  res.send("Update todo");
});

// Delete todo
todoRouter.delete("/todos/:id", (req, res) => {
  res.send("Delete todo");
});

module.exports = todoRouter;

const express = require("express");
const router = express.Router();
const todosRepo = require("./todos.repository");

// Routes
// Get all todos
router.get("/", async (req, res) => {
  try {
    const allTodos = await todosRepo.getTodos();
    return res.json(allTodos);
    // res.json({ message: "hot reloading" });
  } catch (err) {
    console.error(err.message);
  }
});

// Get single todo
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todosRepo.getTodo(id);
    return res.json(todo);
  } catch (err) {
    console.error(err.message);
  }
});

// Create todo
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = await todosRepo.createTodo({ title, description });
    return res.status(201).json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// Update todo
router.put("/:id", (req, res) => {
  res.send("Update todo");
});

// Delete todo
router.delete("/:id", (req, res) => {
  res.send("Delete todo");
});

module.exports = router;

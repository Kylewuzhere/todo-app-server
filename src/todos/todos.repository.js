const pool = require("../db");

module.exports = {
  getTodos: async () => {
    try {
      const { rows } = await pool.query(`
        SELECT * FROM todo`);
      return rows;
    } catch (err) {
      console.error(err.message);
    }
  },
  getTodo: async (id) => {
    try {
      const { rows } = await pool.query(
        `
        SELECT * FROM todo WHERE todo_id = $1`,
        [id]
      );
      return rows.length ? rows[0] : null;
    } catch (err) {
      console.error(err.message);
    }
  },
  createTodo: async ({ title, description }) => {
    try {
      const { rows } = await pool.query(
        "INSERT INTO todo (title, description) VALUES ($1, $2) RETURNING *",
        [title, description]
      );
      return rows[0];
    } catch (err) {
      console.error(err.message);
    }
  },
};

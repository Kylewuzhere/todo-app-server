CREATE DATABASE todo;

-- Path: server/db/sql/02_todo_tables.sql

CREATE TABLE todo.todos (
  todo_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE
);
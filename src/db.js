const { Pool } = require("pg");

const { username, host, dbname, password, port } = process.env.APICLUSTER_SECRET
  ? JSON.parse(process.env.APICLUSTER_SECRET)
  : {
      username: "postgres",
      host: "localhost",
      dbname: "postgres",
      password: "password",
      port: "5432",
    };

const pool = new Pool({
  user: username,
  password: password,
  host: host,
  database: dbname,
  port: port,
});

module.exports = pool;

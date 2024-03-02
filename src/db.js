import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Sql@054003",
  port: 3306,
  database: "nodejscrudmysqldb",
});

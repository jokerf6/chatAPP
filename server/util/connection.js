import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  database: "message",
  username: "root",
  password: "",
  logging: false,
});
export { connection as default };

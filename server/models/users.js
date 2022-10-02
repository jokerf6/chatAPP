import dataType from "sequelize";
import { UUIDV4 } from "sequelize";
function init(connection) {
  connection.define("users", {
    id: {
      type: dataType.UUID,
      primaryKey: true,
      defaultValue: UUIDV4(),
    },
    username: {
      type: dataType.STRING,
      allowNull: false,
    },
    email: {
      type: dataType.STRING,
      allowNull: false,
    },
    password: {
      type: dataType.STRING,
      allowNull: false,
    },
    image: {
      type: dataType.TEXT,
      allowNull: false,
      defaultValue:
        "https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg",
    },
  });
}

export { init };

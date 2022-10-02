import dataType from "sequelize";
import { UUIDV4 } from "sequelize";
function init(connection) {
  connection.define(
    "userMessages",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      senderId: {
        type: dataType.UUID,
      },
      recieverId: {
        type: dataType.UUID,
      },
      message: {
        type: dataType.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
}
export { init };

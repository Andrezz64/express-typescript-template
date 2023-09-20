// This is a exemple of a orm model using sequelize.
// A model can be used to set up your a table. create, edit or delete a entry in database.
import { Model, DataTypes } from "sequelize";
import sequelize from "../data/sequelizeConfig";

export const User = sequelize.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
    },
  },

  {
    timestamps: false,
  }
);

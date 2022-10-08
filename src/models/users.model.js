"use strict";
const { Model } = require("sequelize");
const { role, roleDefault } = require("../constants/role.enum");
const {
  userStatus,
  userStatusDefault,
} = require("../constants/userStatus.enum");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      avatar: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      address: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      phone: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      balance: {
        defaultValue: 0,
        allowNull: false,
        type: DataTypes.FLOAT,

        validate: {
          min: 0,
        },
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM(role),
        defaultValue: roleDefault,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM(userStatus),
        defaultValue: userStatusDefault,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};

"use strict";

const { role, roleDefault } = require("../src/constants/role.enum");
const {
  userStatus,
  userStatusDefault,
} = require("../src/constants/userStatus.enum");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      avatar: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      address: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      phone: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      balance: {
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.FLOAT,

        validate: {
          min: 0,
        },
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM(role),
        defaultValue: roleDefault,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM(userStatus),
        defaultValue: userStatusDefault,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};

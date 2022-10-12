"use strict";

const {
  orderStatus,
  orderStatusDefault,
} = require("../src/constants/orderStatus.enum");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      order_date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      ship_date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM(orderStatus),
        defaultValue: orderStatusDefault,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
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
    await queryInterface.dropTable("Orders");
  },
};

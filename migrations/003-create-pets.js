"use strict";

const {
  petStatus,
  petStatusDefault,
} = require("../src/constants/petStatus.enum");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pets", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.FLOAT,
        validate: {
          min: 0,
        },
      },
      img_url: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      quantity_stock: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
        },
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM(petStatus),
        defaultValue: petStatusDefault,
      },
      cate_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Categories",
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
    await queryInterface.dropTable("Pets");
  },
};

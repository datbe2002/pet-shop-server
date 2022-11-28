"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("OrderDetails", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      order_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      pet_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Pets",
          key: "id",
        },
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
      },
      quantity: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
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
    await queryInterface.dropTable("OrderDetails");
  },
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetails.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      order_id: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      pet_id: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "Pets",
          key: "id",
        },
      },
      quantity: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
        },
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
      modelName: "OrderDetails",
    }
  );
  return OrderDetails;
};

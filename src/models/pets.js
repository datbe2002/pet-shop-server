"use strict";
const { Model } = require("sequelize");
const { petStatus, petStatusDefault } = require("../constants/petStatus.enum");
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pets.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        defaultValue: 0,
        allowNull: false,
        type: DataTypes.FLOAT,
        validate: {
          min: 0,
        },
      },
      img_url: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM(petStatus),
        defaultValue: petStatusDefault,
      },
      cate_id: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "Categories",
          key: "id",
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
      modelName: "Pets",
    }
  );
  return Pets;
};

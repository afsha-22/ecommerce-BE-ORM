const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        allowNull: false
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Tag',
          schema: 'static',
          key: 'id',
        },
      },
      allowNull: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Tag',
          schema: 'static',
          key: 'id',
        },
      },
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

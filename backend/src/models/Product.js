const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  image: {
    type: DataTypes.STRING,
  },

  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Product;
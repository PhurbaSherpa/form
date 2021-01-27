const Sequelize = require("sequelize");
const db = require("../db");

const Stock = db.define("choices", {
  choice1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  choice2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  choice3: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Stock;

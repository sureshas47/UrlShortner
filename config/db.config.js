const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("urlshortner", "postgres", "wave", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;

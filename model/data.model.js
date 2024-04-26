const sequalize = require("../config/db.config");

const DataModel = sequalize.define("Data", {
  id: {
    type: sequalize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  url: {
    type: sequalize.Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: sequalize.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = DataModel;

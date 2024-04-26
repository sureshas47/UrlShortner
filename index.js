const express = require("express");
const sequelize = require("./config/db.config");
const DataModel = require("./model/data.model");
const { routes } = require("./routes/routes");

const app = express();
const PORT = 4000;

app.use(express.json());

routes(app, sequelize);

const DbConnection = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ sync: true });
};

try {
  //database connection
  DbConnection().then(() => {
    console.log("Database connected");
    // running node server
    app.listen(PORT, () => {
      console.log(`Server is connected on port: ${PORT}`);
    });
  });
} catch (error) {
  console.log(error + " Error in connecting to DB");
}

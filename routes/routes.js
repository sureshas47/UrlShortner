const { saveUrlToDB } = require("../controller/controller");
const { redirectUserToUrl } = require("../controller/controller");

const routes = (app, sequelize) => {
  app.post("/create", async (req, res) => {
    saveUrlToDB(req, res, sequelize);
  });
  app.get("/:slug", async (req, res) => {
    redirectUserToUrl(req, res, sequelize);
  });
};

module.exports = { routes };

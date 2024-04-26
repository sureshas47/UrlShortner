const { generateSlug } = require("../utils/slug.util");

const saveUrlToDB = async (req, res, sequelize) => {
  // recursive function to check slug and if it is available generate new one
  const checkSlugOnDB = async () => {
    const slug = generateSlug();
    const isExists = await sequelize.models.Data.findOne({ where: { slug } });
    if (isExists) {
      checkSlugOnDB();
    }
    return slug; // return unique slug
  };

  const slug = await checkSlugOnDB();
  await sequelize.models.Data.create({
    url: req.body.url,
    slug: slug,
  });
  console.log("Data inserted");
  res.send({
    status: "success",
    data: "http://localhost:4000/" + slug,
  });
};

const redirectUserToUrl = async (req, res, sequelize) => {
  const { slug } = req.params;
  const url = await sequelize.models.Data.findOne({ where: { slug } });
  console.log(url);
  if (!url) {
    res.send({
      status: 404,
      error: "Error",
      message: "url not found",
    });
  }
  res.redirect(url.url);
};

module.exports = { saveUrlToDB, redirectUserToUrl };

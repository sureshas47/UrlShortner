const generateSlug = () => {
  return Math.random().toString(36).substring(7); // generate slug
};

module.exports = { generateSlug };

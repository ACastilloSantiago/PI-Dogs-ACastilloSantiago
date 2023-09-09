const getRaza = require("../controllers/getRaza");
module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    // console.log(name);
    // console.log(req.query);
    const razas = await getRaza(name);
    console.log(razas);
    if (razas.error) {
      throw Error(razas.error);
    }
    res.status(203).send(razas);
  } catch (error) {
    res.status(402).json(error.message);
  }
};

const postDog = require("../controllers/postDog");
module.exports = async (req, res) => {
  console.log("entro");
  try {
    const { name, image, height, weight, life_span, temps } = req.body;
    console.log(name, image, height, weight, life_span, temps);
    const sure = await postDog(name, image, height, weight, life_span, temps);
    if (sure.error) {
      throw Error(sure.error);
    }
    res.status(210).send(sure);
  } catch (error) {
    res.status(403).json(error.message);
  }
};

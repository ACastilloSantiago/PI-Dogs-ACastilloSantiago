const getDogsByID = require("../controllers/getDogsByID");
module.exports = async (req, res) => {
  try {
    const { idRaza } = req.params;
    const dog = await getDogsByID(idRaza);
    console.log(dog);
    if (dog.error) {
      throw Error(dog.error);
    }
    res.status(201).json(dog);
  } catch (error) {
    res.status(405).send(error.message);
  }
};

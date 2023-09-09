const getDogsByID = require("../controllers/getDogsByID");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(2, id);
    const dog = await getDogsByID(id);
    console.log(2, dog);
    if (dog.error) {
      throw Error(dog.error);
    }
    res.status(201).json(dog);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getDogs = require("../controllers/getDogs");

module.exports = async (req, res) => {
  try {
    const dogs = await getDogs();
    // console.log(dogs[0]);
    // if (!dogs) {
    //   throw Error("dogs.error");
    // }
    res.status(200).json(dogs);
  } catch (error) {
    res.status(404).json("ripio coñaso");
  }
};

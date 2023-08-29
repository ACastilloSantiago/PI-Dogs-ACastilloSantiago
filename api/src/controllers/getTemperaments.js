const { Temperaments } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
require("dotenv").config();
const { API_KEY } = process.env;

module.exports = async () => {
  //   const dogs = [];
  let c = 1;
  const { data } = await axios.get(`${URL}?api_key=${API_KEY}`);
  data.forEach((dog) => {
    // console.log(dog.temperament.split(", "));
    // console.log([dog.temperament], c++);
    if (dog.temperament) {
      dog.temperament.split(",").forEach(async (temp) => {
        await Temperaments.findOrCreate({ where: { name: temp.trim() } });
        //   console.log(temp.join(" "));
      });
    }

    // await Temperaments.create({ name: dog.temperament });
    // console.log(dog.temperament);
  });
  const tempera = await Temperaments.findAll();
  //   console.log(tempera);
  if (tempera) {
    return tempera;
  }
  //   console.log(dogs.length);

  return { error: "nuse" };
};

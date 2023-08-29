const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
require("dotenv").config();
const { API_KEY } = process.env;
const { Dogs } = require("../db");
const getDogs = require("../controllers/getDogs");

module.exports = async (id) => {
  // const dogDB = await Dogs.findByPk(id);
  // const dog = (await axios.get(`${URL}/${id}?api_key=${API_KEY}`)).data;
  // console.log(dogDB);
  // if (dog.name && dogDB) {
  //   console.log("s");
  //   return { Api: dog, DataBase: dogDB };
  // }
  // if (dog.name) {
  //   return { Api: dog, DataBase: "Not found" };
  // }
  // if (dogDB) {
  //   return { Api: "Not found", DataBase: dogDB };
  // }
  // return { error: "Not found" };

  console.log(+id);
  const dogs = await getDogs();
  const dog = dogs.find((dog) => dog.id.toString() === id);
  if (dog) {
    return dog;
  }

  return { error: "Not found" };
};

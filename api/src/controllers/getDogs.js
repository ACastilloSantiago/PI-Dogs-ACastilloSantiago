const { Dogs } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
require("dotenv").config();
const { API_KEY } = process.env;

module.exports = async () => {
  const dogs = [];
  // const { data } = (await axios.get(`${URL}?api_key=${API_KEY}`)).data;
  // data.forEach((dog) => {
  //   dogs.push({ dog: dog.name });
  // });
  (await axios.get(`${URL}?api_key=${API_KEY}`)).data.forEach((dog) => {
    dogs.push({ Raza: dog.name });
  });
  console.log(dogs);
  //   console.log(d.message);
  //   if (d.message) {
  //     return { error: "Ripio coñaso" };
  //   }
  console.log(dogs.length);

  return dogs;

  //   const d = await Dogs.findAll();
  //   if (d) {
  //     return d;
  //   }
  //   return { error: "Ripio coñaso" };
};

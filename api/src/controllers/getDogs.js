const { Dogs } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
require("dotenv").config();
const { API_KEY } = process.env;

module.exports = async () => {
  // const { data } = (await axios.get(`${URL}?api_key=${API_KEY}`)).data;
  // data.forEach((dog) => {
  //   dogs.push({ dog: dog.name });
  // });
  const dogsApi = (await axios.get(`${URL}?api_key=${API_KEY}`)).data.map(
    (dog) => {
      return {
        name: dog.name,
        temperament: dog.temperament,
        id: dog.id,
        life_span: dog.life_span,
        height: dog.height,
        weight: dog.weight,
        image: dog.image,
        created: false,
      };
    }
  );
  const dogsDB = await Dogs.findAll();
  // console.log(dogsApi);
  // console.log(dogsDB);

  const allDogs = [...dogsApi, ...dogsDB];
  // const allDogs = [{ Api: dogsApi, DataBase: dogsDB }];

  // console.log(allDogs);
  //   if (d.message) {
  //     return { error: "Ripio coñaso" };
  //   }
  // console.log(dogs.length);

  return allDogs;

  //   const d = await Dogs.findAll();
  //   if (d) {
  //     return d;
  //   }
  //   return { error: "Ripio coñaso" };
};

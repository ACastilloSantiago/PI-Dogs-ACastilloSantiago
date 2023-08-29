const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
require("dotenv").config();
const { API_KEY } = process.env;
const { Dogs } = require("../db");

// ME QUEDE CON VER SI LEE BIEN LA RAZA Y SE FIJA EN LA BASE DE DATOS JEJE. TERMINE VIENDO TEMA DE OPERADORES, CAPAS ES MAS FACIL ASI KJEJE

module.exports = async (raza) => {
  console.log(raza, "2");
  const razasDB = await Dogs.findAll({ where: { name: raza.toLowerCase() } });
  console.log(razasDB);
  const razas = (await axios.get(`${URL}/search?q=${raza}&api_key=${API_KEY}`))
    .data;
  // console.log(razas);
  if (razasDB && razas.length) {
    return { Api: razas, DataBase: razasDB };
  }
  if (razasDB) {
    return { Api: "Not found", DataBase: razasDB };
  }
  if (razas.length) {
    return { Api: razas, DataBase: "Not found" };
  }

  return { error: "No existe la raza que esta indicando" };
};

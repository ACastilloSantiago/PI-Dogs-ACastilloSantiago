const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
require("dotenv").config();
const { API_KEY } = process.env;
const { Dogs } = require("../db");
// const getDogs = require("../controllers/getDogs");
const { Op } = require("sequelize");
// ME QUEDE CON VER SI LEE BIEN LA RAZA Y SE FIJA EN LA BASE DE DATOS JEJE. TERMINE VIENDO TEMA DE OPERADORES, CAPAS ES MAS FACIL ASI KJEJE

module.exports = async (raza) => {
  console.log(raza, "2");
  const razasDB = await Dogs.findAll({
    where: { name: { [Op.iLike]: `%${raza}%` } },
  });
  const razas = (await axios.get(`${URL}/search?q=${raza}&api_key=${API_KEY}`))
    .data;
  console.log(razas);
  console.log(razasDB);

  // console.log(razas);
  if (razasDB.length && razas.length) {
    return [...razas, ...razasDB];
  }
  if (razasDB.length) {
    return razasDB;
  }
  if (razas.length) {
    return razas;
  }

  return { error: "No existe la raza que esta indicando" };
};

const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require("../controllers/getDogs");
const getDogsByID = require("../controllers/getDogsByID");
const getRaza = require("../controllers/getRaza");
const postDog = require("../controllers/postDog");
const getTemperaments = require("../controllers/getTemperaments");
const { Temperaments } = require("../db");
const { Dogs } = require("../db");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/temperaments", async (req, res) => {
  try {
    const temp = await getTemperaments();
    if (temp.error) {
      throw Error(temp.error);
    }
    res.status(200).json(temp);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/dogs/name", async (req, res) => {
  try {
    const { name } = req.query;
    // console.log(name);
    // console.log(req.query);
    const razas = await getRaza(name);
    if (razas.error) {
      throw Error(razas.error);
    }
    res.status(200).send(razas);
  } catch (error) {
    res.status(402).json(error.message);
  }
});
router.post("/dogs", async (req, res) => {
  console.log("entro");
  try {
    const { name, image, height, weight, life_span } = req.body;
    console.log(name, image, height, weight, life_span);
    const sure = await postDog(name, image, height, weight, life_span);
    if (sure.error) {
      throw Error(sure.error);
    }
    res.status(200).send(sure);
  } catch (error) {
    res.status(403).json(error.message);
  }
});
router.get("/dogs", async (req, res) => {
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
});
router.get("/dogs/:idRaza", async (req, res) => {
  try {
    const { idRaza } = req.params;
    const dog = await getDogsByID(idRaza);
    console.log(dog);
    if (dog.error) {
      throw Error(dog.error);
    }
    res.status(200).json(dog);
  } catch (error) {
    res.status(405).send(error.message);
  }
});
module.exports = router;

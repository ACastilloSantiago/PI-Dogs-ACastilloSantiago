// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const getDogs = require("../controllers/getDogs");
// const getDogsByID = require("../controllers/getDogsByID");
// const getRaza = require("../controllers/getRaza");
// const postDog = require("../controllers/postDog");
// const getTemperaments = require("../controllers/getTemperaments");
// const { Temperaments } = require("../db");
// const { Dogs } = require("../db");

//
const { Router } = require("express");
const router = Router();
const getDogsHandler = require("../handlers/getDogsHandler");
const getDogsByIdHandler = require("../handlers/getDogsByIdHandler");
const getRazaHandler = require("../handlers/getRazaHandler");
const getTemperamentsHandler = require("../handlers/getTemperamentsHandler");
const postDogHandler = require("../handlers/postDogHandler");

router.get("/temperaments", getTemperamentsHandler);
router.get("/dogs", getDogsHandler);
router.get("/dogs/name", getRazaHandler);
router.post("/dogs", postDogHandler);
router.get("/dogs/:idRaza", getDogsByIdHandler);
module.exports = router;

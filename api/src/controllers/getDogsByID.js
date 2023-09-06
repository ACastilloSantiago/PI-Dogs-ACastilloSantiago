const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
require("dotenv").config();
const { API_KEY } = process.env;
const { Dogs, Temperament } = require("../db");
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

  console.log(id);
  const dogs = await getDogs();

  const dog = isNaN(id)
    ? await Dogs.findByPk(id, {
        include: {
          model: Temperament,
          through: { attributes: [] },
          attributes: ["name"],
        },
      })
    : dogs.find((dog) => dog.id.toString() === id);
  // console.log("diferencial", dog);
  // console.log("diferencial23", dog.dataValues);
  // console.log("diferencial22323", dog.dataValues.temperaments);

  // if (dog && isNaN(id)) {
  //   dog.dataValues.temperaments = dog.dataValues.temperaments.map(
  //     (temperament) => temperament.dataValues.name
  //   );
  //   return dog;
  // }
  if (dog && isNaN(id)) {
    console.log(1, "entro a if");
    console.log(1, dog.dataValues, "entro a if");

    let dogDb = [dog.dataValues];
    console.log(122, dogDb, "entro a if");

    dogDb = dogDb.map((dog) => {
      console.log(2, "entro a map");

      return {
        name: dog.name,
        temperaments: !dog.temperaments.length
          ? "Not found"
          : dog.temperaments
              .map((temp) => `${temp.name},`)
              .join(" ")
              .slice(0, -1),
        id: dog.id,
        life_span: dog.life_span,
        height: dog.height,
        weight: dog.weight,
        image: dog.image,
        created: dog.created,
      };
    });
    return dogDb;
  }
  if (dog) {
    return dog;
  }
  return { error: "Not found" };
};
// if (dog) {
//   if (dog.created) {
//     return dog;
//   }
//   return Dogs.findByPk(id, {
//     include: {
//       model: Temperaments,
//       attributes: ["name"],
//     },
//   });
// }

//***** */

// , {
//         include: {
//           model: Temperaments,
//           attributes: ["name"],
//         },
//       }

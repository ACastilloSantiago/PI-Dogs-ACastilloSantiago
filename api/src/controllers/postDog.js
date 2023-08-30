const { Dogs, Temperaments } = require("../db");
module.exports = async (name, image, height, weight, life_span, temps) => {
  console.log("s");
  if (name && image && height && weight && life_span && temps) {
    const created = await Dogs.create({
      name,
      image,
      height,
      weight,
      life_span,
    });
    console.log(created);
    const asociar = [];
    temps.split(",").forEach(async (temperamento) => {
      const findTemp = await Temperaments.findOne({
        where: { name: temperamento.trim() },
      });
      console.log(findTemp);
      if (findTemp) {
        asociar.push(findTemp);
        await created.addTemperaments(findTemp);
      }
    });
    console.log(asociar);
    // created;
    return { ...created.dataValues, temperament: temps };
  } else return { error: "Faltan datos" };
};

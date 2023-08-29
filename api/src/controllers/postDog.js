const { Dogs } = require("../db");
module.exports = async (name, image, height, weight, life_span) => {
  if (name && image && height && weight && life_span) {
    const created = await Dogs.create({
      name,
      image,
      height,
      weight,
      life_span,
    });
    console.log(created);
    return created;
  } else return { error: "Faltan datos" };
};

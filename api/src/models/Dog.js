const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dogs",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // defaultValue: 265,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

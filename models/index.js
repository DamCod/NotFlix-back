const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    dialectModule: require("pg"),
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Review = require("./Review")(sequelize, Model, DataTypes);

// Luego de definir los modelos, se pueden establecer relaciones
// entre los mismos...

module.exports = {
  sequelize,
  Review,
};

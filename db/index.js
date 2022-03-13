const { config } = require("../config");
const mongoose = require("mongoose");
require("dotenv");

const v5_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
  //useCreateIndex: true,
};

const v6_options = {
  maxPoolSize: 10,
  autoIndex: false,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4,
};

const connectDB = async () => {
  if (process.env.NODE_ENV) {
    try {
      await mongoose.connect(config.bbdd.db_prod, v6_options );
      console.log(`👌 -  Base de datos conectada :PRODUCTION: - 👌`);
    } catch (errProd) {
      console.error(errProd);
      throw new Error(
        `🚨 :: Error al iniciar la base de datos REMOTA EN MONGODB :: 🚨`,
        errProd
      );
    }
  } else {
    try {
      await mongoose.connect(config.bbdd.db_dev, v5_options);
      console.log(`👌 - Base de datos conectada :DEVELOPMENT: - 👌`);
    } catch (errDev) {
      console.error(errDev);
      throw new Error(
        "🚨 :: Error al iniciar la base de datos LOCAL EN S.O. :: 🚨",
        errDev
      );
    }
  }
};

module.exports = connectDB;

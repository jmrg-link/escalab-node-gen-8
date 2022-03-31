const mongoose = require("mongoose");
const { config } = require("../config")//?

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
      await mongoose.connect(config.bbdd.db_prod, v6_options)
      return console.log(`👌- Base de datos conectada :PRODUCTION: -👌`);
    } catch (errProd) {
      return console.error(
        `🚨 :: Error al iniciar la base de datos REMOTA EN MONGODB :: 🚨`, errProd )
    }
  } else {
    try {
      await mongoose.connect(config.bbdd.db_dev, v5_options);
      return console.log(`🧑‍💻- Base de datos conectada :DEVELOPMENT: -🧑‍💻`);
    } catch (errDev) {
      return console.error(
        `🚨 :: Error al iniciar la base de datos LOCAL EN S.O. :: 🚨`, errDev )
    }
  }
}

module.exports = connectDB;

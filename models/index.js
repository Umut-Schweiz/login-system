import config from "../config/db.config.js"
import Sequelize from "sequelize"
import userModel from "./user.model.js";

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = userModel(sequelize, Sequelize);


// use it to force to create the db from scratch 
// .sync({ force: true })

db.sequelize.sync().then(() => {
    console.log('Drop and re-sync db.')
})
  

export default db
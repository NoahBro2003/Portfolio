import { Sequelize } from "sequelize";

//Lire les variables d'environnement
import dotenv from 'dotenv'
const ENV = dotenv.config().parsed
console.log(ENV)

const connection = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT,
    port:ENV.DB_PORT
})

export default connection
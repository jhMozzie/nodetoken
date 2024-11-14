import { Sequelize } from 'sequelize'
import { HOST, USER, PASSWORD, DB_NAME, DB_PORT } from './config.js'

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
    host: HOST,
    port: DB_PORT,
    dialect: 'mysql',
  });
  
  export default sequelize;
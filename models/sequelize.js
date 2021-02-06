require('dotenv').config()

const { Sequelize } = require('sequelize')

const { DB_NAME, DB_PASS, DB_USER, DB_HOST, DB_PORT } = process.env

const sequelizeInstance = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = sequelizeInstance
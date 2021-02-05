require('dotenv').config()

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_NAME
} = process.env

const config = {
  dialect: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  logging: false,
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData'
}

module.exports = config
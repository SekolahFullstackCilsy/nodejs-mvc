const { Model, DataTypes } = require('sequelize')
const sequelizeInstance = require('./sequelize')

class Size extends Model {}

Size.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
  },
  size: {
    type: DataTypes.STRING
  }
}, {
  paranoid: true,
  timestamps: true,
  underscored: true,
  tableName: 'sizes',
  sequelize: sequelizeInstance
})

module.exports = Size
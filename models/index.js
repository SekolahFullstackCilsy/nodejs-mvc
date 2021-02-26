const Product = require('./product')
const Size = require('./size')

const sequelizeInstance = require('./sequelize')

Size.belongsTo(Product, {
  as: 'product',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

Product.hasMany(Size, {
  as: 'sizes',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

module.exports = {
  Product,
  Size,
  sequelizeInstance
}
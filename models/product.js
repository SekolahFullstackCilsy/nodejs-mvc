const { Model, DataTypes } = require('sequelize')
const sequelizeInstance = require('./sequelize')

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DOUBLE
  },
  qty: {
    type: DataTypes.INTEGER
  },
  owner: {
    type: DataTypes.UUID
  }
}, {
  paranoid: true,
  timestamps: true,
  underscored: true,
  tableName: 'products',
  sequelize: sequelizeInstance
})

module.exports = Product

// module.exports = class Product {
//   constructor() {
//     this.products = [
//       {
//         id: 1,
//         name: 'Sayur',
//         description: 'Sayur adalah makanan bergizi',
//         price: 2000,
//         qty: 20
//       },
//       {
//         id: 2,
//         name: 'Bawang',
//         description: 'Bawang bukanlah buah',
//         price: 3000,
//         qty: 20
//       }
//     ]
//   }


//   findAll() {
//     return this.products
//   }

//   findById(id) {
//     const index = this.products.findIndex(product => String(product.id) === String(id))

//     if (index === -1) {
//       return null
//     } else {
//       return this.products[index]
//     }
//   }

//   create(data) {
//     const product = {
//       ...data,
//       id: Math.floor(Math.random() * 100)
//     }

//     this.products.push(product)

//     return product
//   }

//   update(id, data) {
//     const index = this.products.findIndex(product => String(product.id) === String(id))

//     if (index === -1) {
//       return null
//     }

//     this.products[index] = {
//       ...this.products[index],
//       ...data
//     }

//     return this.products[index]
//   }

//   deleteById(id) {
//     const index = this.products.findIndex(product => String(product.id) === String(id))

//     if (index === -1) {
//       return null
//     }

//     this.products.splice(index, 1)

//     return 1
//   }
// }

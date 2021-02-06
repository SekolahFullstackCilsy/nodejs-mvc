const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [
      {
        id: uuid.v4(),
        name: 'Baju Koko',
        description: '',
        price: 100000,
        qty: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuid.v4(),
        name: 'Jaket',
        description: '',
        price: 110000,
        qty: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuid.v4(),
        name: 'Kemeja',
        description: '',
        price: 150000,
        qty: 25,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]


    return queryInterface.bulkInsert('products', products, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};

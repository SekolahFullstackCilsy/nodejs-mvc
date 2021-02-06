module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'owner', {
      type: Sequelize.UUID
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products', 'owner')
  }
};

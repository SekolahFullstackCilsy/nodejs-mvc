module.exports = class Product {
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Sayur'
      },
      {
        id: 2,
        name: 'Bawang'
      }
    ]
  }


  findAll() {
    return this.products
  }

  findById(id) {
    const index = this.products.findIndex(product => String(product.id) === String(id))

    if (index === -1) {
      return null
    } else {
      return this.products[index]
    }
  }
}

module.exports = class Product {
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Sayur',
        description: 'Sayur adalah makanan bergizi',
        price: 2000,
        qty: 20
      },
      {
        id: 2,
        name: 'Bawang',
        description: 'Bawang bukanlah buah',
        price: 3000,
        qty: 20
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

  create(data) {
    const product = {
      ...data,
      id: Math.floor(Math.random() * 100)
    }

    this.products.push(product)

    return product
  }

  update(id, data) {
    const index = this.products.findIndex(product => String(product.id) === String(id))

    if (index === -1) {
      return null
    }

    this.products[index] = {
      ...this.products[index],
      ...data
    }

    return this.products[index]
  }

  deleteById(id) {
    const index = this.products.findIndex(product => String(product.id) === String(id))

    if (index === -1) {
      return null
    }

    this.products.splice(index, 1)

    return 1
  }
}

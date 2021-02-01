const ProductModel = require('../models/product')

const productModel = new ProductModel()

exports.getProducts = (req, res, next) => {
  try {
    const products = productModel.findAll()
    
    return res.json({
      statusCode: 200,
      message: 'Success get products',
      data: products
    })
  } catch (error) {
    return next({
      statusCode: 400,
      message: error.message
    })
  }
}

exports.getProductById = (req, res, next) => {
  try {
    const { id } = req.params
    
    const product = productModel.findById(id)

    if (!product) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Product not found'
      })
    }

    return res.json({
      statusCode: 200,
      message: 'Success get product by id',
      data: product
    })
  } catch (error) {
    return next({
      statusCode: 400,
      message: error.message
    })
  }
}
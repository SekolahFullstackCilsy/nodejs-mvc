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
      throw ({
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

exports.addProduct = async (req, res, next) => {
  try {
    const product = productModel.create(req.body)

    return res.json({
      statusCode: 200,
      message: 'Success add product',
      data: product
    })
  } catch (error) {
    return next({
      statusCode: 400,
      message: error.message
    })
  }
}

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params
    
    const isProductExist = productModel.findById(id)

    if (!isProductExist) {
      throw ({
        statusCode: 404,
        message: 'Product not found'
      })
    }

    const product = productModel.update(id, req.body)

    return res.json({
      statusCode: 200,
      message: 'Success update product',
      data: product
    })
  } catch (error) {
    return next({
      statusCode: 400,
      message: error.message
    })
  }
}

exports.deleteById = async (req, res, next) => {
  try {
    const { id } = req.params

    const isProductExist = productModel.findById(id)

    if (!isProductExist) {
      throw ({
        statusCode: 404,
        message: 'Product not found'
      })
    }

    productModel.deleteById(id)

    return res.json({
      statusCode: 200,
      message: 'Success delete product'
    })
  } catch (error) {
    return next({
      statusCode: 400,
      message: error.message
    })
  }
}
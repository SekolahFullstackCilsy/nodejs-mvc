const { Product, Size } = require('../models')

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Size,
          as: 'sizes'
        }
      ]
    })
    
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

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params
    
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Size,
          as: 'sizes'
        }
      ]
    })

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
    const product = await Product.create(req.body, {
      include: [
        {
          model: Size,
          as: 'sizes'
        }
      ]
    })

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
    
    const isProductExist = await Product.findByPk(id)

    if (!isProductExist) {
      throw ({
        statusCode: 404,
        message: 'Product not found'
      })
    }

    await Product.update(req.body, {
      where: {
        id: id
      }
    })

    return res.json({
      statusCode: 200,
      message: 'Success update product'
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

    const isProductExist = await Product.findByPk(id)

    if (!isProductExist) {
      throw ({
        statusCode: 404,
        message: 'Product not found'
      })
    }

    await Product.destroy({
      where: {
        id: id
      }
    })

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
const { Router } = require('express')
const { getProducts, getProductById, addProduct, update, deleteById } = require('../controllers/product')

const router = Router()

router.get('/', getProducts)

router.get('/:id', getProductById)

router.post('/', addProduct)

router.patch('/:id', update)

router.delete('/:id', deleteById)

module.exports = router

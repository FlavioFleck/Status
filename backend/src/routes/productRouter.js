import express from 'express'
const router = express.Router()

import connection from '../connection.js'
import ProductController from '../controllers/ProductController.js'

const productController = new ProductController(connection)

router.post('/create', productController.createProduct)
router.delete("/delete/:id", productController.deleteProduct)

export default router
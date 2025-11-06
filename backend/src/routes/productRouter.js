import express from 'express'
const router = express.Router()

import ProductController from '../controllers/ProductController.js'
import connection from '../connection.js'

const productController = new ProductController(connection)

router.post("/create", productController.createProduct)
router.delete("/delete/:id", productController.deleteProduct)
router.put("/update/:id", productController.updateProduct)
router.get("/getAll", productController.getAllProducts)
router.get("/get/:id", productController.getProductById)

export default router

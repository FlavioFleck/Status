import express from 'express'
const router = express.Router()


import connection from '../connection.js'
import ProductRespository from "../repositories/ProductRepository.js"
import ProductService from '../services/ProductService.js'
import ProductController from '../controllers/ProductController.js'

const productRepository = new ProductRespository(connection)
const productService = new ProductService(productRepository)
const productController = new ProductController(productService)


// router.post("/create", productController.createProduct)
// router.delete("/delete/:id", productController.deleteProduct)
// router.put("/update/:id", productController.updateProduct)
// router.get("/getAll", productController.getAllProducts)
// router.get("/get/:id", productController.getProductById)

export default router

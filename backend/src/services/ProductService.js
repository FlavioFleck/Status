import Product from "../models/Product.js"
import ProductRepository from "../repositories/ProductRepository.js"

export default class ProductService {
    constructor(connection) {
        this.productRepository = new ProductRepository(connection)
    }

    async createProduct(payload) {
        const { name, description, price, stock } = payload
        const existingProduct = await this.productRepository.getByName(name)
        console.log(existingProduct)
        if(existingProduct.length > 0) {
            throw new Error("Produto já existente!")
        }

        const product = new Product(name, description, price, stock)
        const result = await this.productRepository.add(product)
        return result
    }

    async deleteProduct(){}

    async updateProduct(){}

    async getProductById(){}

    async getAllProduct(){}


}
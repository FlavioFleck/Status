import Product from "../models/Product"
import ProductRepository from "../repositories/ProductRepository"

export default class ProductService {
    constructor(connection) {
        this.productRepository = new ProductRepository(connection)
    }

    async createProduct(payload) {
        const {name, description, price, stock} = payload
        const product = new Product(name, description, price, stock)
        
        const existingProduct = await this.productRepository.getByName(name)
        if(existingProduct.length > 0) {
            throw new Error("Produto já existente!")
        }

        const result = await this.productRepository.add(product)
        return result.insertId
    }

    async deleteProduct(){}

    async updateProduct(){}

    async getProductById(){}

    async getAllProduct(){}


}
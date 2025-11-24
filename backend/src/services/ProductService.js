import Product from "../models/Product.js"

export default class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository
    }

    async createProduct(payload) {
        const { name, description, price, stock } = payload
        const existingProduct = await this.productRepository.getByName(name)
        if(existingProduct.length > 0) {
            throw new Error("Produto já existente!")
        }

        const product = new Product(name, description, price, stock)
        const result = await this.productRepository.add(product)
        return result
    }

    async deleteProduct(payload){
        const { id } = payload
        const result = await this.productRepository.delete(id)
        if(result < 1) {
            throw new Error("O produto informado não existe!")
        }
        return result
    }

    async updateProduct(payload){
        const { id, product } = payload
        const result = await this.productRepository.update(id, product)
        if(result < 1) {
            return { success: false, message: "Não foi possível atualizar o produto!" }
        }
        return { success: true, message: "Produto atualizado com sucesso!"} 
    }

    async getProductById(payload){
        const { id } = payload
        const result = await this.productRepository.get(id)
        if(result < 1) {
            throw new Error("O produto informado não existe!")
        }
        return result
    }

    async getAllProduct(){
        const result = await this.productRepository.getAll()
        if(result.length < 1) {
            return { success: false, message: "Não há produtos na lista!" }
        }
        return { success: true, data: result }
    }


}
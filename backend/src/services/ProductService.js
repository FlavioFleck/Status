import Product from "../models/Product.js"

export default class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository
    }

    async createProduct(payload) {
        const existingProduct = await this.productRepository.getByName(payload)
        if(existingProduct.length > 0) {
            throw new Error("Produto já existente!")
        }

        const product = new Product(payload)
        const result = await this.productRepository.add(product)
        return result
    }

    async deleteProduct(payload){
        const success = await this.productRepository.delete(payload)
        if(!success) {
            throw new Error("O produto informado não existe!")
        }
        return success
    }

    async updateProduct(payload){
        const result = await this.productRepository.update(payload)
        if(result < 1) {
            throw new Error("Não foi possível atualizar o produto!")
        }
        return result
    }

    async getAllProduct(){
        const result = await this.productRepository.getAll()
        if(result.length < 1) {
            throw new Error("Não há produtos na lista!")
        }
        return result
    }

    async getById(payload){
        const product = await this.productRepository.getById(payload)
        if(product) {
            throw new Error("O produto com o id informado não existe!")
        }
        return product
    }

    async getByName(payload){
        const product = await this.productRepository.getByName(payload)
        if(product) {
            throw new Error("O produto com o nome informado não existe!")
        }
        return product
    }
    


    


}
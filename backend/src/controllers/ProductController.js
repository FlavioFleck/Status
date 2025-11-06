import ProductService from "../services/ProductService"

export default class ProductController {
    constructor(connection) {
        this.productService = new ProductService(connection)
    }
}
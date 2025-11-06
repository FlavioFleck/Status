import ProductService from "../services/ProductService.js"

export default class ProductController {
    constructor(connection) {
        this.productService = new ProductService(connection)
    }

    createProduct = async (req, res) => {
        try {
            const payload = {
                ...req.body
            }

            await this.productService.createProduct(payload)
            res.status(200).send({message: "Produto criado com sucesso."})
        } catch(err) {
            res.status(400).send({message: "Falha na criação do produto", error: err.message})
        }
    }

    deleteProduct() {}
}
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
            res.status(200).send({message: "Produto criado com sucesso!"})
        } catch(err) {
            res.status(400).send({message: "Falha na criação do produto", error: err.message})
        }
    }

    deleteProduct = async (req, res) => {
        try {
            const payload = {
                id: req.params.id
            }

            await this.productService.deleteProduct(payload)
            res.status(200).send({message: "Produto deletado com sucesso!"})
        } catch(err) {
            res.status(400).send({message: "Falha na exlusão do produto", error: err.message})
        }
    }

    updateProduct = async (req, res) => {
        const payload = {
            id: req.params.id,
            product: { ...req.body }
        }

        const result = await this.productService.updateProduct(payload)

        if(!result.success) {
            return res.status(200).send({ message: result.message })
        }
        return res.status(200).send({ message: result.message })
    }

    getProductById = async (req, res) => {
        const payload = {
            id: req.params.id
        } 
        const result = await this.productService.getProductById(payload)
        res.send({ product: result })
    }

    getAllProducts = async (req, res) => {
        const result = await this.productService.getAllProduct()

        if(!result.success) {
            return res.status(200).send({message: result.message})
        }

        return res.status(200).send({produtos: result.data})
    }
}
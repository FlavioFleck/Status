export default class ProductController {
    constructor(productService) {
        this.productService = productService
    }

    createProduct = async(req, res) => {
        const payload = { ...req.body }

        try {
            const product = await this.productService.add(payload)
            res.status(201).send({product: product, message: "Produto criado com sucesso!"})
        } catch(err) {
            if(err.message.includes("Produto já existente!")) {
                res.status(409).send({error: err.message})
            }
            res.status(500).send({error: "Erro interno no servidor."});
        }
    }

    deleteProduct = async(req, res) => {
        const payload = { ...req.params }

        try {
            const success = await this.productService.delete(payload)
            res.status(200).send({success: success, message: "Produto deletetado com sucesso!"})
        } catch(err) {
            if(err.message.includes("O produto informado não existe!")) {
                res.status(404).send({error: err.message})
            }
            res.status(500).send({error: "Erro interno no servidor."})
        }
    }

    updateProduct = async(req, res) => {
        const payload = { ...req.body }

        try {
            const newProduct = await this.productService.update(payload)
            res.status(200).send({newProduct: newProduct, message: "Produto atualizado com sucesso!"})
        } catch (err) {
            if(err.message.includes("Não foi possível atualizar o produto!")) {
                res.status(422).send({error: err.message})
            }
            res.status(500).send({error: "Erro interno no servidor."});
        } 
    }

    getAllProducts = async(req, res) => {
        try {
            const products = await this.productService.getAll()
            res.status(200).send({product: products, message: "Produtos encontrados!"})
        } catch(err) {
            if(err.message.includes("Não há produtos na lista!")) {
                res.status(404).send({error: err.message})
            }
            res.status(500).send({error: "Erro interno no servidor."});
        }
    }

    getProductById = async(req, res) => {
        const payload = { ...req.params }
        
        try {
            const product = this.productService.getById(payload)
            res.status(404).send({product: product, message: "Produto encontrado!"} )
        } catch (err) {
            if(err.message.includes("O produto com o id informado não existe!")) {
                res.status(404).send({error: err.message})
            }
            res.status(500).send({error: "Erro interno no servidor."});
        }
    }

    getProductByName = async(req, res) => {
        const payload = { ...req.params }

        try {
            const product = await this.productService.getByName(payload)
            res.status(200).send({product: product, message: "Produto encontrado!"} )
        } catch (err) {
            if(err.message.includes("O produto com o nome informado não existe!")) {
                res.status(404).send({error: err.message})
            }
            res.status(500).send({error: "Erro interno no servidor."});
        }
    }
}
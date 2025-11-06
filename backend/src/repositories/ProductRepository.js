export default class ProductRepository {
    constructor(connection) {
        this.connection = connection
    }

    async add(product) {
        const query = "INSERT INTO products VALUE (?, ?, ?, ?)"
        const [info] = await his.connection.query(query,[
            product.name,
            product.description,
            product.price,
            product.stock
        ])

        return info
    }
    
    async delete(id) {}

    async update(id, product) {}

    async get(id) {}

    async getAll() {}

    async getByName(name) {
        const query = "SELECT * FROM products WHERE name = ?"
        const [info] = this.connection.query(query, [name])
        return info
    }
}
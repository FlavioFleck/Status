export default class ProductRepository {
    constructor(connection) {
        this.connection = connection
    }

    async add(product) {
        const query = "INSERT INTO products(name, description, price, stock) VALUE (?, ?, ?, ?)"
        const [info] = await this.connection.query(query, [
            product.name,
            product.description,
            product.price,
            product.stock
        ])

        return info.insertId
    }
    
    async delete(id) {}

    async update(id, product) {}

    async get(id) {}

    async getAll() {}

    async getByName(name) {
        const query = "SELECT * FROM products WHERE name = ?"
        const [info] = await this.connection.query(query, [name])
        return info
    }
}
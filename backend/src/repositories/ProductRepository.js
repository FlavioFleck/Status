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
    
    async delete(id) {
        const query = "DELETE FROM products WHERE id = ?"
        const [info] = await this.connection.query(query, [id])
        return info.affectedRows
    }

    async update(id, product) {
        const query = "UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?"
        const [info] = await this.connection.query(query, [
            product.name,
            product.description,
            product.price,
            product.stock,
            id
        ])
        return info.affectedRows
    }

    async get(id) {
        const query = "SELECT * FROM products WHERE id = ?"
        const [info] = await this.connection.query(query, [id])
        return info[0]
    }

    async getAll() {
        const query = "SELECT * FROM products"
        const [info] = await this.connection.query(query)
        return info
    }

    async getByName(name) {
        const query = "SELECT * FROM products WHERE name = ?"
        const [info] = await this.connection.query(query, [name])
        return info
    }
}
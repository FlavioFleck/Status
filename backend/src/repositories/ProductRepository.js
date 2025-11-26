export default class ProductRepository {
    constructor(connection) {
        this.connection = connection
    }

    async add({name, description, price, stock}) {
        const query = "INSERT INTO products(name, description, price, stock) VALUE (?, ?, ?, ?)"
        const [info] = await this.connection.query(query, [
            name,
            description,
            price,
            stock
        ])

        return info.insertId
    }
    
    async delete({id}) {
        const query = "DELETE FROM products WHERE id = ?"
        const [info] = await this.connection.query(query, [id])
        return info.affectedRows > 0
    }

    async update({name, description, price, stock, id}) {
        const query = "UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?"
        const [info] = await this.connection.query(query, [
            name,
            description,
            price,
            stock,
            id
        ])
        return info
    }

    async getAll() {
        const query = "SELECT * FROM products"
        const [info] = await this.connection.query(query)
        return info
    }

    async getById({id}) {
        const query = "SELECT * FROM products WHERE id = ?"
        const [info] = await this.connection.query(query, [id])
        return info[0]
    }

    async getByName({name}) {
        const query = "SELECT * FROM products WHERE name = ?"
        const [info] = await this.connection.query(query, [name])
        return info[0]
    }
}
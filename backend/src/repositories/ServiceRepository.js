export default class ServiceRepository{
    constructor(connection){
        this.connection = connection;
    }

    async add ({name, description, price}) {
        const query = `
            INSERT INTO services (name, description, price)
                VALUES (?, ?, ?);
        `

        const [info] = await this.connection.query(query, [
            name,
            description,
            price
        ]);
        return info;
    }

    async delete ({id}) {
        const query = `
            DELETE FROM services 
                WHERE id = ?; 
        `

        const [info] = await this.connection.query(query, [
            id
        ]);
        return info.affectedRows > 0;
    }

    async update({id, data}) {
        const query = `
            UPDATE services 
                SET name = ?,
                    description = ?,
                    price = ?
            WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            data.name,
            data.description,
            data.price,
            id
        ]);
        return info;
    }

    




}
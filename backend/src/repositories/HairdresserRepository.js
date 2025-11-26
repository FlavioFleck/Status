export default class HairdresserRepository {
    constructor(connection) {
        this.connection = connection;
    }

    async add({name, email, cpf, availability}) {
        const query =`
            INSERT INTO hairdressers(name, email, cpf, availability)
                VALUES(?, ?, ?, ?); 
        `

        const [info] = await this.connection.query(query, [
            name,
            email,
            cpf,
            availability
        ]);
        return info;
    }

    async delete({id}) {
        const query = `
            DELETE FROM hairdressers
                WHERE id = ?; 
        `

        const [info] = await this.connection.query(query[
            id
        ]);
        return info.affectedRows > 0;
    }

    async update({id, data}) {
        const query = `
            UPDATE hairdressers
                SET name = ?,
                    email = ?,
                    cpf = ?,
                    availability = ?
                WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            data.name,
            data.email,
            data.cpf,
            data.availability,
            id
        ]);
        return info
    } 

    async getAll() {
        const query = `
            SELECT  name,
                    email,
                    cpf,
                    availability,
                    created_at
                FROM hairdressers;
        `

        const [info] = await this.connection.query(query);
        return info;
    }

    async getById({id}){
        const query = `
            SELECT  name,
                    email,
                    cpf,
                    availability,
                    created_at
                FROM hairdressers
            WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            id
        ]);
        return info[0];
    }

    async getByName({name}) {
        const query = `
            SELECT  name,
                    email,
                    cpf,
                    availability,
                    created_at
                FROM hairdressers
            WHERE name = ?;
        `

        const [info] = await this.connection.query(query, [
            name
        ]);
        return info[0];
    }
}
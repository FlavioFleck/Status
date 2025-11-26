export default class HairdresserRepository {
    constructor(connection) {
        this.connection = connection;
    }

    async add({name, cpf, availability}) {
        const query =`
            INSERT INTO hairdressers(name, cpf, availability)
                VALUES(?, ?, ?); 
        `

        const [info] = await this.connection.query(query, [
            name,
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

    async update({id}) {
        const query = `
            UPDATE hairdressers
                SET name,
                    cpf,
                    availability
                WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            id
        ]);
        return info
    } 

    
}
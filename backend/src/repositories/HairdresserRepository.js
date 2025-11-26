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

        const [info] = this.connection.query(query[
            id
        ]);
        return info.affectedRows;
    }

    
}
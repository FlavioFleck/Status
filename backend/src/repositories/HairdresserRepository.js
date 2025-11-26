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

    
}
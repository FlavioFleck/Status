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

    
}
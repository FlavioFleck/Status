export default class UserRespository {
    constructor(connection) {
        this.connection = connection
    }

    async add(user){
        const query = `
            INSERT INTO users(name, lastname, email, password, role)
                VALUES (?, ?, ?, ?, ?);
        `

        const [info] = await this.connection.query(query, [
            user.name,
            user.lastname,
            user.email,
            user.password,
            user.role
        ]);
        return info.insertId;
    }

    async delete(id){
        const query = `
            DELETE FROM users
                WHERE id = ?
        `
        const [info] = await this.connection.query(query, [id]);
        return info.affectedRows;
    }
    
    async update(id, data){
        const query = `
            UPDATE users 
                SET name = ?,
                    lastname = ?,
                    email = ?,
                    password = ?
            WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            data.name,
            data.lastname,
            data.email,
            data.password,
            id
        ]);
        return info.affectedRows;
    }

    async getAll(){
        const query = `
            SELECT  name,
                    lastname,
                    email,
                    password,
                    role,
                    created_at
                FROM users;
        `

        const [info] = await this.connection.query(query);
        return info;
    }

    async getById(id){
        const query = `
            SELECT  name,
                    lastname,
                    email,
                    password,
                    role,
                    created_at
                FROM users
            WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [id])
        return info[0];
    }

    async getByEmail(email){
        const query = `
            SELECT  id,
                    name,
                    lastname,
                    email,
                    password,
                    role,
                    created_at
                FROM users
            WHERE email = ?
        `

        const [rows] = await this.connection.query(query, [email]);
        return rows[0] || null;
    }
}
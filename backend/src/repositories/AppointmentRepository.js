export default class AppointmentRespository {
    constructor(connection) {
        this.connection = connection;
    }

    async add({user_id, hairdresser_id, service_id, appointment_datetime, status}){
        const query = `
            INSERT INTO appointments(user_id, hairdresser_id, service_id, appointment_datetime, status)
                VALUES (?, ?, ?, ?, ?);
        `

        const [info] = await this.connection.query(query,[
            user_id,
            hairdresser_id,
            service_id,
            appointment_datetime,
            status
        ]);
        return info;
    }

    async delete({id}){
        const query = `
            DELETE FROM appointments
                WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            id
        ]);
        return info.affectedRows > 0;
    }
    
    async update({id, data}){
        const query = `
            UPDATE appointments
                SET user_id = ?,
                    haidresser_id = ?,
                    service_id = ?,
                    status = ?
                WHERE id = ?;
        `
        const [info] = await this.connection.query(query, [
            id,
            data
        ]);
        return info;
    }

    async getAll(){
        const query = `
            SELECT  user_id,
                    hairdresser_id,
                    service_id,
                    appointment_datetime,
                    status,
                    created_at
                FROM appointments;
        `

        const [info] = await this.connection.query(query);
        return info;
    }

    async getById({id}){
        const query = `
            SELECT  user_id,
                    hairdresser_id,
                    service_id,
                    appointment_datetime,
                    status,
                    created_at
                FROM appointments 
            WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            id
        ]);
        return info[0];
    }
}
export default class AvailableTimesRepository {
    constructor(connection){
        this.connection = connection;
    }

    async add({hairdresser_id, date, time, is_booked}) {
        const query = `
            INSERT INTO available_times (hairdresser_id, date, time, is_booked)
                VALUES (?, ?, ?, ?);
        `

        const [info] = await this.connection.query(query, [
            hairdresser_id,
            date,
            time,
            is_booked
        ]);
        return info;
    }

    async delete({id}) {
        const query = `
            DELETE available_times
                WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            id
        ]);
        return info.affectedRows > 0;
    }

    async update({id, data}) {
        const query = `
            UPDATE available_times
                SET hairdresser_id = ?,
                    date = ?,
                    time = ?,
                    is_booked = ?
                WHERE id =?;
        `

        const [info] = await this.connection.query(query, [
            data.hairdresser_id,
            data.date,
            data.time,
            data.is_booked,
            id
        ]);

        return info;
    }

    async getAll() {
        const query = `
            SELECT  hairdresser_id,
                    date,
                    time,
                    is_booked
                FROM available_times;
        `

        const [info] = await this.connection.query(query);
        return info; 
    }

    async getById({id}) {
        const query = `
            SELECT  hairdresser_id,
                    date,
                    time,
                    is_booked
                FROM available_times
            WHERE id = ?;
        `

        const [info] = await this.connection.query(query, [
            id
        ]);
        return info[0];
    }
}
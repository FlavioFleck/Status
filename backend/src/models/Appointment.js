export default class Appointment {
    constructor({user_id, hairdresser_id, service_id, appointment_datetime, status}) {
        this.user_id = user_id
        this.hairdresser_id = hairdresser_id
        this.service_id = service_id
        this.appointment_datetime = appointment_datetime
        this.status = status
    }
}
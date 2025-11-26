export default class Appointment {
    constructor({userId, hairdresserId, serviceId, appointmentId, status}) {
        this.userId = userId
        this.hairdresserId = hairdresserId
        this.serviceId = serviceId
        this.appointmentId = appointmentId
        this.status = status
    }
}
import Appointment from "../models/Appointment.js";

export default class AppointmentService {
    constructor(appointmentRespository) {
        this.appointmentRespository = appointmentRespository
    }

    async createAppointment(payload) {
        const appointment = new Appointment(payload);
        const result = await this.appointmentRespository.add(appointment);
        return result;
    }

    async deleteAppointment(payload) {
        const success = await this.appointmentRespository.delete(payload);
        if(!success){
            throw new Error("Agendamento informado não encontrado ou inexistente.")
        }
        return success;
    }

    async updateAppointment(payload) {
        const result = await this.appointmentRespository.update(payload);
        if(!result) {
            throw new Error("Erro ao atualizar os dados do agendamento.");
        }
        return result;
    }

    async getAllAppointments() {
        const result = await this.appointmentRespository.getAllAppointments();
        if(!result) {
            throw new Error("Nenhum agendamento encontrado.")
        }
        return result;
    }

    async getAppointmentById() {
        const result = await this.appointmentRespository.getAppointmentById(payload);
        if(!result){
            throw new Error("O agendamento com o id informado não existe.");
        }
        return result;
    }
}
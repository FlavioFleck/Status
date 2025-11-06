import AppointmentRespository from "../repositories/AppointmentRepository.js";

export default class AppointmentController { 
    constructor(connection) {
        this.userRepository = new AppointmentRespository(connection)
    }

    createAppointment = async(req, res) => {

    }

    updateAppointment = async(req, res) => {

    }

    deleteAppointment = async(req, res) => {
        
    }
}
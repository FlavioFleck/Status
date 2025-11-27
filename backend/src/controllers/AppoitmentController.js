export default class AppointmentController { 
    constructor(appointmentService) {
        this.appointmentService = appointmentService
    }

    createAppointment = async(req, res) => {
        const payload = { ...req.body };

        try {
            const appointment = await this.appointmentService.createAppointment(payload);
            res.status(201).send({
                appointment: appointment,
                message: "Agendamento concluído."
            });
        } catch (err) {
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    deleteAppointment = async(req, res) => {
        const payload = { ...req.params };

        try {
            const success = await this.appointmentService.deleteAppointment(payload);
            res.status(200).send({
                message: "Agendamento cancelado."
            })
        } catch (err) {
            if(err.message.includes("Agendameno informado não encontrado ou inexistente")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    updateAppointment = async (req, res) => {
        const payload = { ...req.body };

        try {
            const newAppointment = await this.appointmentService.updateAppointment(payload);
            res.status(200).send({
                newAppointment: newAppointment,
                message: "Dados do agendamento atualizados com sucesso!"
            });
        } catch (err) {
            if(err.message.includes("Erro ao atualizar os dados do agendamento")){
                res.status(409).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getAllAppointments = async (req, res) => {
        try {
            const appointments = await this.appointmentService.getAllAppointments();
            res.status(200).send({
                appointments: appointments
            });
        } catch (err) {
            if(err.message.includes("Nenhum agendamento encontrado")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getAppointmentById = async (req, res) => {
        const payload = { ...req.params };

        try {
            const appointment = await this.appointmentService.getAppointmentById(payload);
            res.status(200).send({
                appointment: appointment
            });
        } catch (err) {
            if(err.message.includes("O agendamento com o id informado não existe")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }
}
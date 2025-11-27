export default class AvailableTimeController{
    constructor(availableTimeService){
        this.availableTimeService = availableTimeService;
    }

    createAvailableTime = async (req, res) => {
        const payload = { ...req.body };

        try {
            const availableTime = await this.availableTimeService.createAvailableTime(payload);
            res.status(201).send({
                availableTime: availableTime,
                message: "Data criada com sucesso!"
            });
        } catch (err) {
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    deleteAvailableTime = async (req, res) => {
        const payload = { ...req.params };

        try {
            const success = await this.availableTimeService.deleteAvailableTime(payload);
            res.status(200).send({
                success: success,
                message: "Data deletada com sucesso."
            });
        } catch (err) {
            if(err.message.includes("Data informada não encontrada ou inexistente.")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    updateAvailableTime = async (req, res) => {
        const payload = { ...req.body };

        try {
            const newAvailableTime = await this.availableTimeService.updateAvailableTime(payload);
            res.status(200).send({
                newAvailableTime: newAvailableTime,
                message: "Dados alterados com sucesso!"
            });
        } catch (err) {
            if(err.message.includes("Erro ao atualizar os dados da data")) {
                res.status(409).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getAllAvailableTimes = async (req, res) => {
        try {
            const availableTimes = await this.availableTimeService.getAllAvailableTimes();
            res.status(200).send({
                availableTimes: availableTimes
            });
        } catch (err) {
            if(err.message.includes("Não foi possível encontrar nenhuma data")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getAvailableTimeById = async (req, res) => {
        const payload = { ...req.params };

        try {
            const availableTime = await this.availableTimeService.getAvailableTimeById(payload);
            res.status(200).send({
                availableTime: availableTime
            }); 
        } catch (error) {
            if(err.message.includes("A data com o id informado não existe")) {
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
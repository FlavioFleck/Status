export default class HairdresserController {
    constructor(hairdresserService){
        this.hairdresserService = hairdresserService;
    }

    createHairdresser = async (req, res) => {
        const payload = { ...req.body };

        try{
            const hairdresser = await this.hairdresserService.createHairdresser(payload);
            res.status(201).send({
                hairdresser: hairdresser,
                message: "Funcionário criado com sucesso!"
            });
        } catch(err) {
            if(err.message.includes("CPF já está em uso")){
                res.status(409).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    deleteHairdresser = async (req, res) => {
        const payload = { ...req.params };
        console.log("Payload: ", payload)

        try {
            const success = await this.hairdresserService.deleteHairdresser(payload);
            res.status(200).send({
                success: success,
                message: "Funcionário excluído com sucesso!"
            });
        } catch (err) {
            if(err.message.includes("Funcionário informado incorretamente ou não existente")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    updateHairdresser = async (req, res) => {
        const payload = { ...req.body };

        try {
            const newHairdresser = await this.hairdresserService.updateHairdresser(payload);
            res.status(200).send({
                newHairdresser: newHairdresser,
                message: "Dados do funcionário atualizados com sucesso!"
            });
        } catch (err) {
            if(err.message.includes("Falha ao atualizar os dados do funcionário")){
                res.status(422).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getAllHairdressers = async (req, res) => {
        try {
            const hairdressers = await this.hairdresserService.getAllHairdressers();
            res.status(200).send({
                hairdressers: hairdressers
            });   
        } catch (err) {
            if(err.message.includes("Nenhum funcionário encontrado")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor"
            });
        }
    }

    getHairdresserById = async (req, res) => {
        const payload = { ...req.params }

        try {
            const hairdresser = await this.hairdresserService.getHairdresserById(payload);
            res.status(200).send({
                hairdresser: hairdresser
            });
        } catch (err) {
            if(err.message.includes("O funcionário com o id informado não existe")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getHairdressersByName = async (req, res) => {
        const payload = { ...req.body };

        try {
            const hairdressers = await this.hairdresserService.getHairdressersByName(payload);
            res.status(200).send({
                hairdressers: hairdressers
            });
        } catch (err) {
            if(err.message.includes("O funcionário com o nome informado não existe")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getHairdresserByCpf = async (req, res) => {
        const payload = { ...req.body };

        try {
            const hairdresser = await this.hairdresserService.getHairdresserByCpf(payload);
            res.status(200).send({
                hairdresser: hairdresser
            });
        } catch (err) {
            if(err.message.includes("O funcionário com o CPF informado não existe")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            })
        }
    }
}
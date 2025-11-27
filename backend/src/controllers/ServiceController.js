export default class ServiceController {
    constructor(serviceService){
        this.serviceService = serviceService;
    }

    createService = async (req, res) => {
        const payload = { ...req.body };

        try {
            const service = await this.serviceService.createService(payload);
            res.status(201).send({
                service: service,
                message: "Serviço criado com sucesso!"
            });
        } catch (err) {
            if(err.message.includes("Serviço já existente")){
                res.status(409).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });            
        }
    }

    deleteService = async (req, res) => {
        const payload = { ...req.params };

        try {
            const success = await this.serviceService.deleteService(payload);
            res.status(200).send({
                message: "Serviço deletado com sucesso!"
            });
        } catch (err) {
            if(err.message.includes("Serviço informado não encontrado ou inexistente")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    updateService = async (req, res) => {
        payload = { ...req.body };

        try {
            const newService = await this.serviceService.updateService(payload);
            res.status(200).send({
                newService: newService,
                message: "Dados do serviço atualizados com sucesso!"
            });
        } catch (err) {
            if(err.message.includes("Erro ao atualizar os dados do serviço")){
                res.status(409).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getAllServices = async (req, res) => {
        try {
            const services = await this.serviceService.getAllServices();
            res.status(200).send({
                services: services
            });
        } catch (err) {
            if(err.message.includes("Nenhum serviço encontrado")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }
    
    getServiceById = async (req, res) => {
        const payload = { ...req.params };

        try {
            const service = await this.serviceService.getServiceById(payload);
            res.status(200).send({
                service: service
            });
        } catch (err) {
            if(err.message.includes("O serviço com o id informado não existe")){
                res.status(404).send({
                    error: err.message
                });
            }
            res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    }

    getServiceByName = async (req, res) => {
        const payload = { ...req.body };

        try {
            const service = await this.serviceService.getServiceByName(payload);
            res.status(200).send({
                service: service
            });
        } catch (err) {
            if(err.message.includes("O serviço com o nome informado não existe")){
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
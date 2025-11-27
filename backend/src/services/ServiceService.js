import Service from "../models/Service.js";

export default class ServiceService {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    async createService(payload) {
        const existingService = await this.serviceRepository.getByName(payload);
        if(existingService){
            throw new Error("Serviço já existente.");
        }

        const service = new Service(payload);
        const result = await this.serviceRepository.add(service);
        return result;
    }

    async deleteService(payload) {
        const success = await this.serviceRepository.delete(payload);
        if(!success){
            throw new Error("Serviço informado não encontrado ou inexistente.")
        }
        return success;
    }

    async updateService(payload){
        const result = await this.serviceRepository.update(payload);
        if(!result){
            throw new Error("Erro ao atualizar os dados do serviço.");
        }
        return result;
    }

    async getAllServices(){
        const result = await this.serviceRepository.getAll();
        if(!result){
            throw new Error("Nenhum serviço encontrado.")
        }
        return result;
    }

    async getServiceById(payload){
        const result = await this.serviceRepository.getById(payload);
        if(!result){
            throw new Error("O serviço com o id informado não existe.");
        }
        return result;
    }

    async getServiceByName(payload){
        const result = await this.serviceRepository.getByName(payload);
        if(!result){
            throw new Error("O serviço com o nome informado não existe.")
        }
        return result;
    }
}
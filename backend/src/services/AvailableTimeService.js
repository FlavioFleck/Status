import AvailableTime from "../models/AvailableTime.js";

export default class AvailableTimeService {
    constructor(availableTimeRepository){
        this.availableTimeService = availableTimeRepository;
    }

    async createAvailableTime(payload) {
        const availableTime = new AvailableTime(payload);
        const result = await this.availableTimeRepository.add(availableTime);
        return result;
    }

    async deleteAvailableTime(payload) {
        const success = await this.availableTimeService.delete(payload);

        if(!success) {
            throw new Error("Data informada não encontrada ou inexistente.");
        }
        return success;
    }

    async updateAvailableTime(payload) {
        const result = await this.availableTimeService.update(payload);
        if(!result){
            throw new Error("Erro ao atualizar os dados da data.");
        }
        return result;
    }

    async getAllAvailableTimes() {
        const result = await this.availableTimeService.getAll();
        if(!result) {
            throw new Error("Não foi possível encontrar nenhuma data.");
        }
        return result;
    }

    async getAvailableTimeById(payload) {
        const result = await this.availableTimeService.getById(payload);
        if(!result){
            throw new Error("A data com o id informado não existe.")
        }
        return result;
    }
}
import Hairdresser from "../models/Hairdresser.js";

export default class HairdresserService {
    constructor(hairdresserRepository){
        this.hairdresserRepository = hairdresserRepository;
    }

    async createHairdresser(payload) {
        const existingCpf = await this.hairdresserRepository.getByCpf(payload);
        
        if(existingCpf){
            throw new Error("CPF já está em uso.")
        }

        const hairdresser = new Hairdresser(payload);
        const result = await this.hairdresserRepository.add(hairdresser);
        return result;
    }

    async deleteHairdresser(payload) {
        const success = await this.hairdresserRepository.delete(payload);

        if(!success){
            throw new Error("Funcionário informado incorretamente ou não existente.");
        }

        return success;
    }

    async updateHairdresser(payload){
        const result = await this.hairdresserRepository.update(payload);

        if(!result) {
            throw new Error("Falha ao atualizar os dados do funcionário.");
        }

        return result;
    }

    async getAllHairdressers(){
        const result = await this.hairdresserRepository.getAll();

        if(!result) {
            throw new Error("Nenhum funcionário encontrado.");
        }
        return result;
    }

    async getHairdresserById(payload) {
        const result = await this.hairdresserRepository.getById(payload);

        if (!result){
            throw new Error("O funcionário com o id informado não existe.")
        }
        return result;
    }

    async getHairdressersByName(payload) {
        const result = await this.hairdresserRepository.getByName(payload);

        if (!result){
            throw new Error("O funcionário com o nome informado não existe.")
        }
        return result;
    }

    async getHairdressersByCpf(payload) {
        const result = await this.hairdresserRepository.getByCpf(payload);

        if(!result){
            throw new Error("O funcionário com o CPF informado não existe.")
        }
        return result;
    }


}


import User from "../models/User.js";
import bcrypt from "bcrypt";
import UserRepository from "../repositories/UserRepository.js";

export default class UserService {
    constructor(connection) {
        this.userRepository = new UserRepository(connection);
    }
    
    createUser = async(payload) => {
        const {name, lastname, email, password, role = "client"} = payload;
        
        const existingUser = await this.userRepository.getByEmail(email);
        if(existingUser) {
            throw new Error("Email já está em uso.")
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user  = new User({name, lastname, email, password: hashedPassword, role});
        const result = await this.userRepository.add(user);
        return result;
    };

    deleteUser  = async(payload) => {
        const {id} = payload;

        const result = await this.userRepository.delete(payload);
        if (!result) {
            throw new Error("Usuário não encontrado.")
        }
        return result;
    };

    updateUser = async(id, payload) =>  {
        const existingUser = await this.userRepository.getById(id);
        if(!existingUser) {
            throw new Error("Usuário não encontrado.")
        }

        let updatedData = {
            ...existingUser, ...payload
        };

        if(payload.password) {
            const hashedPassword = await bcrypt.hash(payload.password, 10);
            updatedData.password = hashedPassword;
        }

        const updatedUser = new User({
            updatedData
        });

        const result = await this.userRepository.update(id, updatedUser)
        if(!result) {
            throw new Error("Falha ao atualizar dados do usuário!");
        }

        return updatedData;
    };

    getAllUsers = async() => {
        const users = await this.userRepository.getAll();
        return users;
    };

    getUserById = async(id) => {
        const user = await this.userRepository.getById(id);
        if(!user) {
            throw new Error("Usuário não encontrado.")
        }
        return user;
    };
}

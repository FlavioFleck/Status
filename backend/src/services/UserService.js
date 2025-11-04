import User from "../models/User.js";
import UserRespository from "../repositories/UserRespository.js";

export default class UserService {
    constructor(connection) {
        this.userRespository = new UserRespository(connection);
    }
    
    createUser = async(payload) => {
        const {name, lastname, email, password} = payload;
        
        const existingUser = await this.userRespository.getByEmail(email);
        if(existingUser) {
            throw new Error("Email já está em uso.")
        }

        const user  = new User({name, lastname, email, password});
        const result = await this.user.UserRespository.add(user);
        return result.insertId;
    };

    deleteUser  = async(payload) => {
        const {id} = payload;

        const result = await this.userRespository.delete(id);
        if (!result) {
            throw new Error("Usuário não encontrado.")
        }
        return result.affectedRows;
    };

    updateUser = async(id, payload) =>  {
        const existingUser = await this.userRespository.getById(id);
        if(!existingUser) {
            throw new Error("Usuário não encontrado.")
        }
        const updatedUser = new User({
            ...existingUser,
            ...payload
        });

        const result = await this.userRespository.update(id, updatedUser)
        if(!result) {
            throw new Error("Falha ao atualizar dados do usuário!");
        }

        return {
            id,
            ...updatedUser
        }
    };

    getAllUsers = async() => {
        const users = await this.userRespository.getAll();
        return users;
    };

    getUserById = async(id) => {
        const user = await this.userRespository.getById(id);
        if(!user) {
            throw new Error("Usuário não encontrado.")
        }
        return user;
    };
}

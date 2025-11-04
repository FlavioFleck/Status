import User from "../models/User.js";
import UserRespository from "../repositories/UserRespository.js";

export default class UserService {
    constructor(connection) {
        this.UserRespository = new UserRespository(connection);
    }
    
    createUser = async(payload) => {
        const {name, lastname, email, password} = payload;
        
        const existingUser = await UserRespository.getByEmail(email);
        if(existingUser) {
            throw new Error("Email já está em uso.")
        }

        const user  = new User(name, lastname, email, password);
        const result = await this.user.UserRespository.add(user);
        return result.insertId;
    }
}

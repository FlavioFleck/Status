import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";
import UserRespository from "../repositories/UserRepository.js";
import User from "../models/User.js";

export default class AuthService {
    constructor(connection) {
        this.userRespository = new UserRespository(connection);
    }

    login = async (email, password) => {
        const user = await this.userRespository.getByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            throw new Error("Senha incorreta");
        }

        const token = generateToken({
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
            lastname: user.lastname
        });

        return { token };
    };

    register = async (payload) => {
        const {name, lastname, email, password, role = "client"} = payload;
        const existingUser = await this.userRespository.getByEmail(email);
        if (existingUser) {
            throw new Error("Email já está em uso");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User ({
            name, 
            lastname,
            email,
            password: hashedPassword,
            role
        });

        const insertId = await this.userRespository.add(user);
        const token = generateToken({
            id: insertId,
            email,
            role, 
            name,
            lastname
        });

        return { id: insertId, token };
    };
}

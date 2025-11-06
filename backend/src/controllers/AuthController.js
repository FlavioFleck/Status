import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";
import UserRepository from "../repositories/UserRepository.js";

export default class AuthController {
    constructor(connection) {
        this.userRepository = new UserRepository(connection)
    }

    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await this.userRepository.getByEmail(email);
            if(!user) {
                return res.status(401).send ({
                    error: "Credenciais inválidas (usuário não encontrado)." 
                });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).send({
                    error: "Credenciais inválidas (senha incorreta)"
                });
            }

            const token = generateToken({
                id: user.id,
                email: user.email,
                role: user.role,
                name: user.name,
                lastname: user.lastname
            });

            return res.status(200).send({
                message: "Login realizado com sucesso!",
                token
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    };
}



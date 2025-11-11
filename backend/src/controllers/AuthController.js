import AuthService from "../services/AuthService.js";

export default class AuthController {
    constructor(connection) {
        this.authService = new AuthService(connection);
    }

    login = async (req, res) => {
        try {
            const { email, password } = req.body;

            const { token } = await this.authService.login(email, password);

            return res.status(200).send({
                message: "Login realizado com sucesso!",
                token
            });
        } catch (error) {
            if(error.message.includes("Senha incorreta") || error.message.includes("Usuário não encontrado")){
                return res.status(401).send({
                    error: error.message
                });
            }

            console.error(error);
            return res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    };

    register = async (req, res) => {
        try {
            const { name, lastname, email, password, role = "client" } = req.body;

            const { id, token } = await this.authService.register({
                name,
                lastname,
                email,
                password,
                role
            });

            return res.status(201).send({
                message: "Usuário criado com sucesso!",
                userId: id,
                token
            });
        } catch (error) {
            if (error.message.includes("Email já está em uso")) {
                return res.status(400).send({
                    error: error.message
                });
            }

            console.error(error);
            return res.status(500).send({
                error: "Erro interno no servidor."
            });
        }
    };
}
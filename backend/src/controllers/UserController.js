import UserService from "../services/UserService.js";

export default class UserController { 
    constructor(connection) {
        this.user.userService = new UserService(connection)
    }

    createUser = async(req, res) => {
        try {
            const payload = await this.userService.createUser(req.body);
            return res.status(201).send({
                message:"Usuário criado com sucesso!",
                userId: payload
            });
        } catch (error) {
            return res.status(400).send({
                error: "Solicitação inválida!"
            });
        }
    };

    updateUser = async(req, res) => {

    }

    deleteUser = async(req, res) => {

    }
}
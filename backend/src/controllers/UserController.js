import UserRespository from "../repositories/UserRespository.js";

export default class UserController { 
    constructor(connection) {
        this.userRepository = new UserRespository(connection)
    }

    createUser = async(req, res) => {
        
    }

    updateUser = async(req, res) => {

    }

    deleteUser = async(req, res) => {

    }
}
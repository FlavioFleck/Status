import express from 'express'
const router = express.Router()


import connection from '../connection.js'
import UserRespository from '../repositories/UserRepository.js'
import UserService from '../services/UserService.js'
import UserController from '../controllers/UserController.js'

const userRepository = new UserRespository(connection)
const userService = new UserService(userRepository)
const userController = new UserController(userService)


router.post('/create', userController.createUser)
router.delete("/delete/:id", userController.deleteUser)
router.put("/update/:id", userController.updateUser)
router.get("/get", userController.getAllUsers)
router.get("/get/:id", userController.getUserById)

export default router
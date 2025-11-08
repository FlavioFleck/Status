import express from 'express'
const router = express.Router()

import connection from '../connection.js'
import UserController from '../controllers/UserController.js'

const userController = new UserController(connection)


router.post('/create', userController.createUser)
router.delete("/delete/:id", userController.deleteUser)
router.put("/update/:id", userController.updateUser)
router.get("/get", userController.getAllUsers)
router.get("/get/:id", userController.getUserById)

export default router
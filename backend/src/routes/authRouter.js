import express from 'express'
const router = express.Router()


import connection from '../connection.js'
import UserRepository from '../repositories/UserRepository.js'
import AuthService from '../services/AuthService.js'
import AuthController from '../controllers/AuthController.js'

const userRespository = new UserRepository(connection)
const authService = new AuthService(userRespository)
const authController = new AuthController(authService);


router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
import express from 'express'
const router = express.Router()

import connection from '../connection.js'
import AuthController from '../controllers/AuthController.js'

const authController = new AuthController(connection);

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
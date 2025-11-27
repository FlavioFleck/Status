import express from 'express'
const router = express.Router()

import connection from '../connection.js'
import HairdresserRespository from '../repositories/HairdresserRepository.js'
import HairdresserService from '../services/HairdresserService.js'
import HairdresserController from '../controllers/HairdresserController.js'

const hairdresserRepository = new HairdresserRespository(connection)
const hairdresserService = new HairdresserService(hairdresserRepository)
const hairdresserController = new HairdresserController(hairdresserService)

router.post('/create', hairdresserController.createHairdresser)
router.delete('/delete/:id', hairdresserController.deleteHairdresser)
router.get('/getAll', hairdresserController.getAllHairdressers)

export default router

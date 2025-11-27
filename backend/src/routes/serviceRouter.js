import express from 'express'
const router = express.Router()

import connection from '../connection.js'
import ServiceRespository from '../repositories/ServiceRepository.js'
import ServiceService from '../services/ServiceService.js'
import ServiceController from '../controllers/ServiceController.js'

const serviceRepository = new ServiceRespository(connection)
const serviceService = new ServiceService(serviceRepository)
const serviceController = new ServiceController(serviceService)

router.post('/create', serviceController.createService)
router.delete('/delete/:id', serviceController.deleteService)
router.get('/getAll', serviceController.getAllServices)

export default router

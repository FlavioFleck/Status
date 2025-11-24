import express from 'express'
const router = express.Router()

import connection from '../connection.js'
import AppointmentRespository from '../repositories/AppointmentRepository.js'
import AppointmentController from '../controllers/AppoitmentController.js'
import AppointmentService from '../services/AppointmentService.js'

const appointmentRepository = new AppointmentRespository(connection)
const appointmentService = new AppointmentService(appointmentRepository)
const appointmentController = new AppointmentController(appointmentService)


router.post('/create', appointmentController.createAppointment)
router.delete("/delete/:id", appointmentController.deleteAppointment)
router.put("/update", appointmentController.updateAppointment)


export default router
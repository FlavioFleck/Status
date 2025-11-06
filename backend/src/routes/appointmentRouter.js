import express from 'express'
const router = express.Router()

import connection from '../connection.js'
import AppointmentController from '../controllers/AppoitmentController.js'

const appointmentController = new AppointmentController(connection)


router.post('/create', appointmentController.createAppointment)
router.delete("/delete/:id", appointmentController.deleteAppointment)
router.put("/update", appointmentController.updateAppointment)


export default router
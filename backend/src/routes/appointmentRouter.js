import express from 'express'
const router = express.Router()

import connection from '../connection'
import AppointmentController from '../controllers/AppointmentController'

const appointmentController = new appointmentController(connection)


router.post('/create', appointmentController.createAppointment)
router.delete("/delete/:id", appointmentController.deleteAppointment)
router.put("/update", appointmentController.updateAppointment)


export default router
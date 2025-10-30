import connection from '../connection'
import express from 'express'
const router = express.Router()

import userRouter from '../routes/userRouter.js'
import appointmentRouter from '../routes/appointmentRouter.js'

router.use("/user", userRouter)
router.use('/appointment', appointmentRouter)


export default router
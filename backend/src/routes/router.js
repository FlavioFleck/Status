import express from 'express'
const router = express.Router()

import userRouter from '../routes/userRouter.js'
import authRouter from '../routes/authRouter.js'
import appointmentRouter from '../routes/appointmentRouter.js'
import productRouter from "../routes/productRouter.js"
import hairdresserRouter from '../routes/hairdresserRouter.js'

router.use("/user", userRouter)
router.use("/auth", authRouter)
router.use('/appointment', appointmentRouter)
router.use("/product", productRouter)
router.use("/hairdresser", hairdresserRouter)

export default router
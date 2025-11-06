import express from 'express'
const router = express.Router()

import userRouter from '../routes/userRouter.js'
import appointmentRouter from '../routes/appointmentRouter.js'
import productRouter from "../routes/productRouter.js"

router.use("/user", userRouter)
router.use('/appointment', appointmentRouter)
router.use("/product", productRouter)


export default router
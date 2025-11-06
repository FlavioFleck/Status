import express from 'express'
import router from './routes/productRouter'
const app = express()

app.use(express.json())
app.use(router)

app.listen(5010, () => {
    console.log("Servidor rodando!")
})
import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
import ruko_router from './routers/ruko_router.js'

mongoose.connect('mongodb://localhost:27017/penyewaan-ruko', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection

connection.on('error', (error) => console.log(error))
connection.on('open', () =>console.log("Connection Berhasil"))

const app = express()

app.use(cors())
app.use(express.json())

app.use('/ruko', ruko_router)

app.listen('3000', () => console.log("Server running di port 3000"))
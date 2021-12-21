import express from 'express'
import { addRuko, deleteRuko, editRuko, getRuko, getRukoById } from '../controllers/ruko_controller.js'


const ruko_router = express.Router()

//menampilkan semua ruko
ruko_router.get('/', getRuko)

//menampilkan satu ruko
ruko_router.get('/:id', getRukoById)

//menambahkan satu ruko
ruko_router.post('/', addRuko)

//mengupdate satu ruko
ruko_router.patch('/:id', editRuko)

//menghapus satu ruko
ruko_router.delete('/:id', deleteRuko)

export default ruko_router
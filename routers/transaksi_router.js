import express from 'express'
import { addTransaksi, deleteTransaksi, editTransaksi, getTransaksi, getTransaksiById } from '../controllers/transaksi_controller.js'



const transaksi_router = express.Router()

//menampilkan semua ruko
transaksi_router.get('/', getTransaksi)

//menampilkan satu ruko
transaksi_router.get('/:id', getTransaksiById )

//menambahkan satu ruko
transaksi_router.post('/', addTransaksi)

//mengupdate satu ruko
transaksi_router.patch('/:id', editTransaksi)

//menghapus satu ruko
transaksi_router.delete('/:id', deleteTransaksi)

export default transaksi_router
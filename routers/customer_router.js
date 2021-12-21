import express from 'express'
import { addCustomer, deleteCustomer, editCustomer, getCustomer, getCustomerById, } from '../controllers/customer_controller.js'


const customer_router = express.Router()

//menampilkan semua ruko
customer_router.get('/', getCustomer)

//menampilkan satu ruko
customer_router.get('/:id', getCustomerById )

//menambahkan satu ruko
customer_router.post('/', addCustomer)

//mengupdate satu ruko
customer_router.patch('/:id', editCustomer)

//menghapus satu ruko
customer_router.delete('/:id', deleteCustomer)

export default customer_router
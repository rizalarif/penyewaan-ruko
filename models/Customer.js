import mongoose from 'mongoose'

const Customer = mongoose.Schema({
    nama:{
        type: String,
        required: true,
    },
    kontak:{
        type: Number,
        required: true,
    }
})

export default mongoose.model("Customer", Customer)
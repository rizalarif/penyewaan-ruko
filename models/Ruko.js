import mongoose from 'mongoose'

const Ruko = mongoose.Schema({
    ukuran_ruko:{
        type: Number,
        required: true,
    },
    harga:{
        type: Number,
        required: true,
    }
})

export default mongoose.model("Ruko", Ruko)
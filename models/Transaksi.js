import mongoose from 'mongoose'


const Transaksi = mongoose.Schema({
    lama_pemakaian:{
        type: Number,
        required: true,
    },
    tanggal_masuk:{
        type: Date,
        required: true,
    },
    tanggal_keluar:{
        type: Date,
        required: true,
    },
    total_pembayaran:{
        type: Number,
        require: true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    ruko:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ruko",
        }
    ],
})

export default mongoose.model("Transaksi", Transaksi)
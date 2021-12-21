import mongoose, { SchemaTypes } from 'mongoose'


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
        type: SchemaTypes.ObjectId,
        ref: "Customer",
    },
    ruko_id:{
        type: SchemaTypes.ObjectId,
        ref: "Ruko",
    },
})

export default mongoose.model("Transaksi", Transaksi)
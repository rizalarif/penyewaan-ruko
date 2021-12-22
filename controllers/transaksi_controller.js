import Transaksi from '../models/Transaksi.js'

//menampilkan semua transaksi
export const getTransaksi = async(req, res) => {
    try {
        const transaksi = await Transaksi.find().populate("customer").populate("ruko");
        res.json(transaksi)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//menampilkan satu transaksi
export const getTransaksiById = async(req, res) =>{
    try {
        const id = req.params.id
        const satu_transaksi = await Transaksi.findById(id).populate("ruko").populate("customer")
        res.json(satu_transaksi)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//menambahkan satu transaksi
export const addTransaksi = async(req, res) => {
    try {
        const transaksi = new Transaksi(req.body)
        const savedTransaksi = await transaksi.save()

        

        res.status(201).json(savedTransaksi)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//megupdate satu transaksi
export const editTransaksi = async(req, res) => {
    try {
        const id = req.params.id
        const check = await Transaksi.findById(id)
        if(!check) return res.status(401).json({message: "Transaksi tidak ditemukan"})
        const updatedTransaksi = await Transaksi.updateOne({_id:id}, {$set: req.body})
        res.status(200).json(updatedTransaksi)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//menghapus satu transaksi
export const deleteTransaksi = async(req, res) => {
    try {
        const id = req.params.id
        const check = await Transaksi.findById(id)
        if(!check) return res.status(401).json({message: "Transaksi tidak ditemukan"})
        const deletedTransaksi = await Transaksi.deleteOne(
            {_id:id}
        )
        res.status(200).json(deletedTransaksi)
    } catch (error) {
        res.status(500).json({message:error})
    }
}


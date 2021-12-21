import Ruko from '../models/Ruko.js'


//menampilkan semua ruko
export const getRuko = async(req, res) => {
    try {
        const ruko = await Ruko.find();
        res.json(ruko)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//menampilkan satu ruko
export const getRukoById = async(req, res) =>{
    try {
        const id = req.params.id
        const satu_ruko = await Ruko.findById(id)
        res.json(satu_ruko)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//menambahkan satu ruko
export const addRuko = async(req, res) => {
    try {
        const ruko = new Ruko(req.body)
        const savedRuko = await ruko.save()
        res.status(201).json(savedRuko)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//mengupdate satu ruko
export const editRuko = async(req, res) => {
    try {
        const id = req.params.id
        const check = await Ruko.findById(id)
        if(!check) return res.status(401).json({message: "Ruko tidak ditemukan"})
        const updatedRuko = await Ruko.updateOne(
            {_id:id},
            {$set: req.body}
        )
        req.status(200).json(updatedRuko)

    } catch (error) {
        res.status(500).json({message:error})
    }
}

//menghapus satu ruko
export const deleteRuko = async(req, res) => {
    try {
        const id = req.params.id
        const check = await Ruko.findById(id)
        if(!check) return res.status(401).json({message: "Ruko tidak ditemukan"})
        const deletedRuko = await Ruko.deleteOne(
            {_id:id}
        )
        req.status(200).json(deletedRuko)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
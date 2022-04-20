const Usuario = require('../models/Usuario')
const Produto = require("../models/Produto")
var cloudinary = require('cloudinary').v2;
class ImagensUpload {
    async uploadPerfil(req, res) {
        const { path, filename } = req.file
        // console.log(filename)

        const user = await Usuario.findByPk(req.id_user)

        const resposta = await cloudinary.uploader.destroy(user.cloudinary_public_id)

        const usuario = await Usuario.update(
            {
                img_perfil: path,
                cloudinary_public_id: filename

            },
            {
                where: {
                    id: req.id_user
                }
            }
        )
        return res.json(usuario)
    };

    async uploadProduto(req, res) {
        const { img1, img2, img3 } = req.files
        // console.log(req.files.img1[0])
        const prod = await Produto.findByPk(req.params.id)

        if(prod.cloudinary_public_id_img1) await cloudinary.uploader.destroy(prod.cloudinary_public_id_img1)
        if(prod.cloudinary_public_id_img2) await cloudinary.uploader.destroy(prod.cloudinary_public_id_img2)
        if(prod.cloudinary_public_id_img3) await cloudinary.uploader.destroy(prod.cloudinary_public_id_img3)

        // const { img1, img2, img3 } = req.files
        //    const resposta = await cloudinary.uploader.destroy('icone-virtual/protucts/10461946-5b51-479c-ac3b-82650f65e449', 
        //     function(result) { 
        //         console.log(result) });
        //         console.log(resposta)

        try {
            const produto =
                await Produto.update({
                    img1: img1[0].path,
                    img2: img2[0].path,
                    img3: img3[0].path,
                    cloudinary_public_id_img1:img1[0].filename,
                    cloudinary_public_id_img2:img2[0].filename,
                    cloudinary_public_id_img3:img3[0].filename,
                }, {
                    where: {
                        id: req.params.id,
                    }
                })
            return res.json(produto)
        } catch (err) {
            return res.status(400).json({ message: err.message })
        }

    }

}

module.exports = new ImagensUpload()
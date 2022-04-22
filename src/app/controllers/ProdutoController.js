const Favorito = require("../models/Favorito");
const Produto = require("../models/Produto");
const Usuario = require("../models/Usuario");
var cloudinary = require('cloudinary').v2;
class ProdutoController {
  async create(req, res) {

    const { nome, preco } = req.body;
    const { img1, img2, img3 } = req.files

    if (!nome || !preco)
      return res
        .status(400)
        .json({ messagem: "Parâmetros obrigatórios não informados!" });

    if (!img1.path) {
      const produto = await Produto.create({ ...req.body, img1: "https://res.cloudinary.com/https-cronosagencia-herokuapp-com/image/upload/v1650409061/icone-virtual/padrao_o2ujue.png" })
      return res.json(produto);
    }else{
      const produto = await Produto.create(req.body)
      return res.json(produto);

    }
    

   
  }

  async index(req, res) {
    const { id } = req.params;

    const produto = await Produto.findByPk(id, {
      include: [
        {
          model: Favorito,
          as: "likes",
          include: [{ model: Usuario, as: "usr", attributes: ["id", "nome"] }],
        },
      ],
    });

    if (!produto)
      return res.status(404).json({ messagem: "Produto não encontrado" });

    return res.json(produto);
  }

  async list(req, res) {
    const produtos = await Produto.findAll({
      include: [
        {
          model: Favorito,
          as: "likes",
        },
      ],
    });

    return res.json(produtos)
  }

  async update(req, res) {
    const { id } = req.params;

    const { nome, preco} = req.body;

    if (!nome || !preco)
      return res
        .status(400)
        .json({ messagem: "Parâmetros obrigatórios não informados!" });



    const produto = await Produto.findByPk(id);

    if (!produto)
      return res.status(404).json({ messagem: "Produto não encontrado" });

    await produto.update(req.body)
    await produto.save()

    return res.json(produto)
  }

  async delete(req, res) {
    const { id } = req.params;

    const produto = await Produto.findByPk(id);

    if (!produto)
      return res.status(404).json({ messagem: "Produto não encontrado" });

    const resposta =  await produto.destroy()

    if(resposta === 1) {
      if(produto.cloudinary_public_id_img1) await cloudinary.cloudinary.uploader.destroy(produto.cloudinary_public_id_img1)
      if(produto.cloudinary_public_id_img2) await cloudinary.cloudinary.uploader.destroy(produto.cloudinary_public_id_img2)
      if(produto.cloudinary_public_id_img3) await cloudinary.cloudinary.uploader.destroy(produto.cloudinary_public_id_img3)
    }

    return res.status(204).json({messagem:"Deletado com sucesso!"})
  }
}

module.exports = new ProdutoController();

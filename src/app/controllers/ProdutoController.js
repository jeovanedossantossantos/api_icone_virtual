const Favorito = require("../models/Favorito");
const Produto = require("../models/Produto");
const Usuario = require("../models/Usuario");

class ProdutoController {
  async create(req, res) {
    const { nome, preco, img1 } = req.body;

    if (!nome || !preco || !img1)
      return res
        .status(400)
        .json({ messagem: "Parâmetros obrigatórios não informados!" });

    const produto = await Produto.create(req.body);

    return res.json(produto);
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

    const { nome, preco, img1 } = req.body;

    if (!nome || !preco || !img1)
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

    await produto.destroy()

    return res.status(204).json()
  }
}

module.exports = new ProdutoController();

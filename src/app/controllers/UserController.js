const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const Favorito = require("../models/Favorito");
const Produto = require("../models/Produto");
const multer = require('multer');
const {storageUser} = require('../../config/multer');
const parserUser = multer({storage:storageUser})

const ImagensUpload = require('../controllers/ImagensController')

class UserController{
  async create(req, res) {
    const { nome, email, senha, endereco } = req.body;
    // console.log(req);

    if(!nome || !email || !senha || !endereco || senha.lenght < 8) return res.status(400).json({messagem: "Campos obrigatórios não informados!"})
    
    const usuarioExiste = await Usuario.findOne({
      where: {email}
    })

    if(usuarioExiste) return res.status(400).json({messagem: "Já existe um usuário com este e-mail!"}) 
    // parserUser.single("img_perfil")
    const usuario = await Usuario.create(req.body);
    // if(req.file){
    //   const {originalname:filename, filename: path} = req.file;
    //   const ext = filename.split(".").pop();

    //   const img_perfil = await ImagensUpload.uploadPerfil(
    //     null,
    //     usuario.id,
    //     'img_perfil',
    //     path
    //     )
    //     await usuario.save()
    // }
    usuario.senha_hash = null
    usuario.senha = null
    return res.json(usuario)
    
  }

  async index(req, res){
    const {id} = req.params
  
    const usuario = await Usuario.findByPk(id, {
      include:[
        {
          model:Favorito, as:"likes",
          include:[{model:Produto, as:"produto"}]
        }
      ]
    })
   
    if(!usuario) return res.status(404).json({messagem: "Usuario não encontrado!"})
    usuario.senha_hash = null
    return res.json(usuario)

  }

  async list(req, res){
    
    const usuarios = await Usuario.findAll({
      include:[
        {
          model:Favorito, as:"likes",
          include:[{model:Produto, as:"produto"}]
        }
      ]
    })
    
    return res.json(usuarios)

    


  }

  async update(req, res){
    let {id} = req.params
    const userLogado = await Usuario.
    findByPk(req.id_user)

    if(userLogado.tipo !== "root"){
      id = req.id_user
    }
    const {nome, email, endereco} = req.body
    if(!nome || !email || !endereco){
      return res.status(400).json({message: "Campos obrigatorios!"})
    }

    const usuario = await Usuario.update({nome,email,descricao},{where:{id}})
    console.log(usuario)
    if(usuario[0]===0) return res.status(400).json({messagem: "Ops! Ouve um erro, tente mais tarde!"})
    return res.status(200).json({messagem:"Atualizado com sucesso!"})
  }

  async delete(req, res){
    let {id} = req.params
    const userLogado = await Usuario.findByPk(req.id_user)

    if(userLogado.tipo !== "root"){
      id = req.id_user
    }
    const usuario = await Usuario.destroy({
      where:{
        id
      }
    })
    if(usuario===0) return res.status(400).json({messagem: "Usuarios não encontrado!"})
    return res.status(200).json({messagem:"Usarios deletado com sucesso!"})
  }
};

module.exports = new UserController();

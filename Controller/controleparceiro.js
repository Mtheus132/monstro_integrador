const {Usuario, Produto, Empresa} = require('../models');
const ProdutoFavoritoUsuario = require('../models/ProdutoFavoritoUsuario');



const parceiro = {
    index: (req, res) => {
        return res.render("cadastro")
    },

    login: (req,res) => {
      return res.render('login')
    },

    login2: async function(req,res, next){
        try{

            const usuarioLogin = await Usuario.findOne({
              where: {
                email: req.body.email
              }
            })
            console.log(usuarioLogin)
            if(usuarioLogin && usuarioLogin.senha == req.body.senha){
                
              req.session.estaLogado = true
              req.session.usuarioLogado = usuarioLogin
                
                return res.redirect('/')
        
            }else{
                return res.render('erro', { mensagemErro: 'Senha Invalida'})
            }
          }catch (erro){
            next(erro)
          }
    
    },

    logout: function(req, res, next) {
      req.session.destroy()
      res.redirect('/')
    },

    carrinho: (req, res) => {
        return res.render("carrinho")
    },
    cadastroempresa: (req, res) => {
        return res.render("empresa/cadastro-empresa")
    },

    cadastroempresapost: async (req,res) => {
      const emailReq = req.body.email

      const email = await Empresa.findOne({ where: {email:emailReq}})

      if(!email) {
        await Empresa.create(req.body)
        res.redirect('/adminempresa/loginempresa')
      }else{
        res.render('form-servico-erro', {mensagemErro: "email já cadastrado"})
      }
    },


    cadastropessoa:  function(req,res){

    
      res.render('cadastro-pessoa')
  
  },

    cadastropessoapost: async function(req,res){


      const emailReq = req.body.email

      const email = await Usuario.findOne({ where: { email: emailReq } });
      if (!email) {
        await Usuario.create(req.body)
        res.redirect('/login')
    } else {
        res.render('form-servico-erro', {mensagemErro: 'Email já cadastrado'})
  }
  }, 

    enviocontato: (req,res) => {
     return res.render('envio')
    },

    favorito: async function(req,res){

      const usuario = await Usuario.findByPk(req.session.usuarioLogado.id,{
        include: {
          model: Produto,
          as: 'favoritos'
        }
      })
      res.render('favoritos', {
        favoritos: usuario.favoritos,
        usuario: req.session.usuarioLogado.id
      })
    }, 


    favoritar: async function(req,res,next){
      const idProdutos = req.params.idProdutos
      const idUsuario = req.session.usuarioLogado.id
      try {
        await ProdutoFavoritoUsuario.create({
            produto_id: idProdutos,
            usuario_id: idUsuario 
        })
        res.redirect('/favoritos')
      } catch (error) {
        console.log(error) 
        res.redirect('/favoritos')
      }  
      console.log(req.body)
    },
    
    
    produtos: async function(req,res){

  
      try{
          const obj = {
              produto: await Produto.findAll(),
          }
          res.render('lista', obj)
  
      }catch(error){
          res.render('lista')
      }
  }
    

};


module.exports = parceiro;
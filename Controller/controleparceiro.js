const req = require('express/lib/request');
const res = require('express/lib/response');
const {Usuario} = require('../models')



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
                
                return res.redirect('/admin')
        
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
        return res.render("cadastro-empresa")
    },

    
    cadastropessoa:  function(req,res){

    
      res.render('cadastro-pessoa')
  
  },

    cadastropessoapost: async function(req,res){


      await Usuario.create(req.body)

      res.redirect('/login')
      
    }

};


module.exports = parceiro;
var express = require('express');
var router = express.Router();
const { Produto, Usuario} = require('../models')


var parceiro = require("../Controller/controleparceiro");
const { route } = require('./admin');

/* GET home page. */
router.get('/', async function(req, res){


  const   obj = {
      produtos: await Produto.findAll()
  }
  res.render('index', obj)
})


function verificaLogin(req,res,next){
    
  if(!req.session.estaLogado){
      res.redirect('/login')
      return
  }
  next()
}


router.get("/sejaumparceiro", parceiro.index);

router.get("/login", parceiro.login)

router.post('/login', parceiro.login2)

router.get('/logout', parceiro.logout)

router.get("/carrinho", parceiro.carrinho);

router.get("/cadastroempresa", parceiro.cadastroempresa);

router.post("/cadastroempresa", parceiro.cadastroempresapost);

router.get("/cadastropessoa", parceiro.cadastropessoa);

router.post('/cadastropessoa', parceiro.cadastropessoapost)

router.get('/contato', parceiro.enviocontato)

router.get('/produtos', parceiro.produtos)

router.get('/favoritos', verificaLogin, parceiro.favorito)

router.get('/produtos/:idProduto/favoritar', parceiro.favoritar)



module.exports = router;

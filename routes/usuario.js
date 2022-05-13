var express = require('express');
var router = express.Router();
const { Produto, Usuario} = require('../models')


var parceiro = require("../Controller/controleparceiro");


async function validaUsuario(req, res, next){
  if(!req.body.email || !req.body.senha || !req.body.nome){
    res.render('erro', { mensagemErro: 'Preencha todos os campos'})
    return
  }
  next()
}



/* GET home page. */
router.get('/', async function(req, res){


  const   obj = {
      produtos: await Produto.findAll()
  }
  res.render('index', obj)
})



router.get("/sejaumparceiro", parceiro.index);

router.get("/login", parceiro.login)

router.post('/login', parceiro.login2)

router.get('/logout', parceiro.logout)

router.get("/carrinho", parceiro.carrinho);

router.get("/cadastroempresa", parceiro.cadastroempresa);

router.get("/cadastropessoa", parceiro.cadastropessoa);

router.post('/cadastropessoa', validaUsuario, parceiro.cadastropessoapost)




module.exports = router;

const express = require('express')
const router = express.Router()
const multer = require('multer')
const res = require('express/lib/response');
const { Produto, Categoria, Empresa} = require('../models');




//--- Multer IMAGEM --- //

const uploads = multer({
    dest: 'public/uploads/'
})

//--- LOGIN --- //

function verificaLoginEmpresa(req,res,next){
    
    if(!req.session.estaLogado){
        res.redirect('/adminempresa/loginempresa')
        return
    }
    next()
}

router.get('/loginempresa', function (req,res){
    res.render('empresa/login-empresa')
})

router.post('/loginempresa', async function(req,res){
    try{

        const usuarioLogin = await Empresa.findOne({
          where: {
            email: req.body.email
          }
        })

        if(usuarioLogin && usuarioLogin.senha == req.body.senha){
            
          req.session.estaLogado = true
          req.session.usuarioLogado = usuarioLogin
            
            return res.redirect('/adminempresa')
    
        }else{
            return res.render('erro', { mensagemErro: 'Senha Invalida'})
        }
      }catch (erro){
        next(erro)
      }
})

router.get('logoutempresa'), function(req, res, next) {
    req.session.destroy()
    res.redirect('/')
  },


router.use(verificaLoginEmpresa)

router.get('/', async function(req,res){
    const empresa = req.session.usuarioLogado.id
    
    
    const obj = {
        empresa: await Empresa.findByPk(empresa)
    }
        console.log(obj)
        
    res.render('empresa/admin-empresa', obj)
})






router.get('/produtos', async function(req,res){

    const empresa = req.session.usuarioLogado.id

    try{
        const obj = {
            produto: await Produto.findAll(),
            empresa: await Empresa.findByPk(empresa),
    
        }
        res.render('produtos/admin-produtos', obj)

    }catch(error){
        res.render('produtos/admin-produtos')
    }
})

router.get('/produtos/criar', async function(req,res){
    const empresa = req.session.usuarioLogado.id
    const obj = {
        categorias: await Categoria.findAll(),
        empresa: await Empresa.findByPk(empresa),

    }
    res.render('produtos/form-produtos', obj)
})

router.post('/produtos/criar', uploads.single('imagemServico'),  async function(req,res){
    
    req.body.imagem = req?.file?.filename

    await Produto.create(req.body)

    console.log(req.body)

    res.redirect('/adminempresa/produtos')
})

router.get('/produtos/:idProduto/remover', async function(req,res){
    const idProduto = req.params.idProduto
    await Produto.destroy({
        where: {
            id: idProduto
        }
    }) 
    res.redirect('/adminempresa/produtos')
})

router.get('/produtos/:idProduto/editar', async function(req,res){
    const idProduto = req.params.idProduto
    const empresa = req.session.usuarioLogado.id
    const produto = await Produto.findByPk(idProduto, {
          include: {
          model: Categoria,
          as: 'categoria'
        }
    })

    const obj = {
        produto: produto,
        categorias: await Categoria.findAll(),
        empresa: await Empresa.findByPk(empresa)
    }
    res.render('produtos/editar-produto', obj)
})

router.post('/produtos/:idProduto/editar', async function(req,res){
    const idProduto = req.params.idProduto

    await Produto.update(req.body, {
        where: {
            id: idProduto
        }
    })
    console.log(req.body)
    res.redirect('/adminempresa/produtos')
})

router.get('/categorias', async function(req,res){

    const obj = {
        categorias: await Categoria.findAll()
    }
    res.render('categoria/admin-categorias', obj)
})

router.get('/categorias/criar', function(req,res){
  
    
    res.render('categoria/form-categorias')
})

router.post('/categorias/criar', async function(req,res){

    await Categoria.create(req.body)
    
    res.redirect('/adminempresa/categorias')
})


router.get('/categorias/:idCategoria/vercategoria', async function(req,res){
    const idCategoria = req.params.idCategoria 
    const empresa = req.session.usuarioLogado.id
    const categorias =  await Categoria.findByPk(idCategoria, {
        include:{
            model: Produto,
            as: 'produtos'

        }})
    const obj = {
        categorias: categorias,
        
        empresa: await Empresa.findByPk(empresa)
            
        }
    
    console.log(superusuario)
    res.render('categoria/ver-categoria', obj)
})

module.exports = router
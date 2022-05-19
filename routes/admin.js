const express = require('express')
const router = express.Router()
const multer = require('multer')
const res = require('express/lib/response');
const {Usuario, Produto, Categoria} = require('../models');
const { Router } = require('express');



//--- Multer IMAGEM --- //

const uploads = multer({
    dest: 'public/uploads/'
})

//--- LOGIN --- //

function verificaLogin(req,res,next){
    
    if(!req.session.estaLogado){
        res.redirect('/login')
        return
    }
    next()
}

router.use(verificaLogin)

router.get('/', async function(req,res){
    const usuario = req.session.usuarioLogado.id
    
    const obj = {
        usuario: await Usuario.findByPk(usuario)}

    console.log(obj)
    res.render('admin', obj)
})




module.exports = router
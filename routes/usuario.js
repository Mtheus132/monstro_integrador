var express = require('express');
var router = express.Router();


var parceiro = require("../Controller/controleparceiro");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});



router.get("/sejaumparceiro", parceiro.index);

router.get("/login", parceiro.login);

router.get("/carrinho", parceiro.carrinho);




module.exports = router;

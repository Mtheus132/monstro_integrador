var express = require('express');
var router = express.Router();

var listaprodutos = require("../Controller/listaprodutos");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/listaprodutos", listaprodutos.index);

router.get("/verover", listaprodutos.verover);

router.get("/vertouro", listaprodutos.vertouro);

router.get("/verwhey", listaprodutos.verwhey);

router.get("/login", function(req, res, next) {
  res.render('login')
})


router.get("/carrinho", function(req, res, next) {
  res.render("carrinho")
})

module.exports = router;

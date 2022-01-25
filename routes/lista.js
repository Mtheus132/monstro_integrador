var express = require('express');
var router = express.Router();

var listaprodutos = require("../Controller/listaprodutos");


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/listaprodutos", listaprodutos.index);

router.get("/listaprodutos/over", listaprodutos.verover);

router.get("/listaprodutos/touro", listaprodutos.vertouro);

router.get("/listaprodutos/whey", listaprodutos.verwhey);




module.exports = router;

var express = require('express');
var router = express.Router();

var listaprodutos = require("../Controller/listaprodutos");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/listaprodutos", listaprodutos.index);

router.get("/verouver", listaprodutos.verover);

router.get("/vertouro", listaprodutos.vertouro);

router.get("/verwhey", listaprodutos.verwhey);


module.exports = router;

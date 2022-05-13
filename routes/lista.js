var express = require('express');
var router = express.Router();

var listaprodutos = require("../Controller/listaprodutos");



router.get("/listaprodutos", listaprodutos.index);





module.exports = router;

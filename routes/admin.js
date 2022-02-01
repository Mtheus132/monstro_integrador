var express = require('express');
const { index } = require('../Controller/controlleradmin');
var router = express.Router();


var admin = require("../Controller/controlleradmin");

var modelservicos = require("../Models/servicos");

const servico = modelservicos.buscaservicoid(admin);

router.get("/", admin.index)




module.exports = router;
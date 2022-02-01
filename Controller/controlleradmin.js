const res = require("express/lib/response");
var modelservicos = require("../Models/servicos");


const admin = {
    index: (req, res) => {
        return res.render("admin")
    },


    servicos: modelservicos.listaservicos(),

};



module.exports = admin;
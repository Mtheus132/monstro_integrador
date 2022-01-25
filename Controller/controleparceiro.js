const parceiro = {
    index: (req, res) => {
        return res.render("cadastro")
    },

    cadastro: (req, res) => {
        return res.render("usuario")
    }
};


module.exports = parceiro;
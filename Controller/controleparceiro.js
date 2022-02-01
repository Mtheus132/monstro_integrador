const parceiro = {
    index: (req, res) => {
        return res.render("cadastro")
    },

    login: (req, res) => {
        return res.render("login")
    },

    carrinho: (req, res) => {
        return res.render("carrinho")
    }


};


module.exports = parceiro;
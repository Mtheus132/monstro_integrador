const parceiro = {
    index: (req, res) => {
        return res.render("cadastro")
    },

    login: (req, res) => {
        return res.render("login")
    },

    carrinho: (req, res) => {
        return res.render("carrinho")
    },
    cadastroempresa: (req, res) => {
        return res.render("cadastro-empresa")
    },
    cadastropessoa: (req, res) => {
        return res.render("cadastro-empresa")
    }

};


module.exports = parceiro;
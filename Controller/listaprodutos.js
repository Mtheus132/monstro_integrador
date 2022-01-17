const listaprodutos = {
    index: (req, res) => {
        return res.render("lista")
    },


    verover: (req, res) => {
        return res.render("verover")
    },


    vertouro: (req, res) => {
        return res.render("vertouro")
    },

    verwhey: (req, res) => {
        return res.render("verwhey")
    },

};


module.exports = listaprodutos;
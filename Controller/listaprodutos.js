const listaprodutos = {
    index: (req, res) => {
        return res.render("lista")
    },

    verover: (req, res) => {

        let title = {
            titulos: ["Suplemento Gamer Overclock GG++, inteligencia & força, 30 Doses",
                "Touro - Suplemento Energético com 60 capsulas",
                "Kit 2x 100% Whey 900g (1.8kg) Max Titanium Whey Protein Concentrado"]
        };


        return res.render("verover", title)
    },


    vertouro: (req, res) => {
        let title = {
            titulos: ["Suplemento Gamer Overclock GG++, inteligencia & força, 30 Doses",
                "Touro - Suplemento Energético com 60 capsulas",
                "Kit 2x 100% Whey 900g (1.8kg) Max Titanium Whey Protein Concentrado"]
        };
        return res.render("vertouro", title)
    },

    verwhey: (req, res) => {

        let title = {
            titulos: ["Suplemento Gamer Overclock GG++, inteligencia & força, 30 Doses",
                "Touro - Suplemento Energético com 60 capsulas",
                "Kit 2x 100% Whey 900g (1.8kg) Max Titanium Whey Protein Concentrado"]
        };

        return res.render("verwhey", title)
    }
};


module.exports = listaprodutos;
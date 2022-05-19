const listaprodutos = {
    index: async function (req, res){
        try {      
            const obj = {
              produtos: await Produto.findAll()
          }
           res.render("lista", obj)
        } catch (error) {
           res.render('lista')
        }
        
    },

    
};


module.exports = listaprodutos;
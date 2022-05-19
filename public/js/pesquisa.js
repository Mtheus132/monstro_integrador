
const {Usuario, Produto, Categoria} = require('../models');


async function pesquisa() {
    let input = document.getElementById('pesquisar').value
    input=input.toLowerCase();
    let x = await Produto.findAll();
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
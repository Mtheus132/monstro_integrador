function ValidaLogin(e){ 
    console.log('ValidaLogin')
    limpaErros(e.target)
    
    const password = document.getElementsByName('senha')[0]
    const email = document.getElementsByName('email')[0]



    let erros = [
        ...validateRequired(e.target),
    ]

    const listaErros = e.target.querySelector('.lista-erros')
    const ul = generateErrors(erros)
    listaErros.replaceChildren(ul)
    if(erros.length){
        e.preventDefault()
    }
}

    


function exececutaCadastro(e){
    e.preventDefault()
}

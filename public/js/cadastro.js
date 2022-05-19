function validaCadastro(e){ 

    limpaErros(e.target)
    
    const password = document.getElementsByName('senha')[0]
    const repeatPassword = document.getElementsByName('repeatPassword')[0]
   



    let erros = [
        ...validateRequired(e.target),
        ...validaCamposIguais(password, repeatPassword)
    ]
    
    const erros2 = validaCamposIguais(password, repeatPassword)
    erros = [...erros, ...erros2]

    if(password.value != repeatPassword.value){
        erros.push('Senhas não conferem')
       
    }


    
    if(erros.length){
        e.preventDefault()
    }
    const listaErros = e.target.querySelector('.lista-erros')
    const ul = generateErrors(erros)
    listaErros.replaceChildren(ul)
}


function exececutaCadastro(e){
    e.preventDefault()
}

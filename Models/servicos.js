const servicos = []

function listaservicos() {
    return servicos
}

function buscaservicoid(id) {
    const servico = servicos.find(function (item) {
        return item.id == id
    })
    return servico
}


module.exports.listaservicos = listaservicos;

module.exports.buscaservicoid = buscaservicoid;
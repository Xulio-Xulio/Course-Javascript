function exibirArtigo(id, callbackSucesso, callbackErro) {
    //Lógica: recuperar o id via requisição htpp
    if ( true ) {
        callbackSucesso(`Funções de callback em js`)
    } else {
        callbackErro(`Erro ao recuperar dados`)
    }
}
 var callbackSucesso = function(titulo, descicao){
    document.write(titulo)
    document.write(`<hr/>`)
    document.write(descricao)
 }
 
 var callbackErro = function(erro){
     document.write(`Erro ${erro}`)
 }

 exibirArtigo(1, callbackSucesso, callbackErro)
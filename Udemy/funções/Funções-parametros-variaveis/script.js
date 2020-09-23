function soma() {
    var resultado = 0
    for ( var i in arguments) {
        resultado += arguments[i]
        console.log(arguments[i])
    }

    return resultado
}

console.log(soma(7, 8, 3))
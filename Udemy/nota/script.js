function calculate() {
    var prova1 = document.querySelector('input#prova1')
    var prova2 = document.querySelector('input#prova2')
    var prova3 = document.querySelector('input#prova3')
    var answer = document.querySelector('p#answer')
    var answer1 = document.querySelector('p#answer1')

    var p1 = Number(prova1.value)
    var p2 = Number(prova2.value)
    var p3 = Number(prova3.value)
    
    var media = (p1 + p2 + p3)/3

    /* var media = Number(p1.value)
    var media = Number(p2.value)
    var media = Number(p3.value)*/

    answer.innerHTML = `A sua media é ${media.toFixed(2)}`

    if( media >= 7) {
        answer1.innerHTML += `Parabens voce passou. Boas ferias!!!<p/>`
    } 
    else {
        answer2.innerHTML += `Infelizmente voce repetiu. Por favor entrar em contato com o colegio.<p/>`
    }
}

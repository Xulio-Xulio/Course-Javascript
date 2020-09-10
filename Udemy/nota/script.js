function calculate() {
    var p1 = document.querySelector('input#p1')
    var p2 = document.querySelector('input#p2')
    var p3 = document.querySelector('input#p3')
    var answer = document.querySelector('p#answer')

    /* p1 = parseFloat(p1)
    p2 = parseFloat(p2)
    p3 = parseFloat(p3) */
    
    media = (p1 + p2 + p3)/3

    var media = Number(p1.value)
    var media = Number(p2.value)
    var media = Number(p3.value)
     
    answer.innerHTML = `A sua media é ${media}`

    if( media >= 7) {
        answer.innerHTML += `Parabens voce passou. Boas ferias!!!`
    } Else {
        answer.innerHTML += `Infelizmente voce repetiu. Por favor entrar em contato com o colegio.`
    }
}
console.log(media)
//String
var text = 'Dale Dele Dele Dole'

//Number
var number = 7
var fractionalNumber = 17.35

//Boolean
var test = true


/* alert(number) */

var sNumber = document.querySelector('p#number')
sNumber.innerHTML = `Number ${number}`

document.write(text)

console.log(fractionalNumber)

var nome = prompt('Digite seu nome:')

var idade = prompt('Digite sua idade:')

document.write('<h1>Ola ' + nome + ' vejo que possui ' + idade + ' anos<h1/>')

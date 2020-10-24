//Software de mercenaria

//Paradigma procedural

//Cadeira
/* let qtde_pernas = 4
let giratoria = true
let cor = `azul` */

//Array de cadeiras
/* 
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0][`qtde_pernas`] = 4
cadeiras[0][`giratoria`] = false
cadeiras[0][`cor`] = `azul`

cadeiras[1] = Array()
cadeiras[1][`qtde_pernas`] = 1
cadeiras[1][`giratoria`] = true
cadeiras[1][`cor`] = `preto`

cadeiras[2] = Array()
cadeiras[2][`qtde_pernas`] = 4
cadeiras[2][`giratoria`] = true
cadeiras[2][`cor`] = `branco`

function girar_cadeira(indice) {
    if(cadeiras[indice][`giratoria`] === true) {
        console.log(`girou!!!`)
    } else {    
        console.log(`este modelo não gira`)
    }
}

function adicionar_cadeira(qtde_pernas, giratoria, cor) {
    let cadeira = Array()

    cadeira[`qtde_pernas`] = qtde_pernas
    cadeira[`giratoria`] = giratoria
    cadeira[`cor`] = cor

    cadeiras.push(cadeira)
}

adicionar_cadeira(1, false, `cinza`)

console.log(cadeiras)

girar_cadeira(0)
*/

//paradigma de OO
class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if(this.giratoria === true){
            console.log(`girou!!!`)
        }
        else {
            console.log(`este modelo não gira`)
        }
    }
}

let cadeira = new Cadeira(4, false, `rosa`)
let cadeira1 = new Cadeira(1, true, `azul`)
let cadeira2 = new Cadeira(3, false, `preto`)
let cadeira3 = new Cadeira(4, true, `branco`)

let cadeiras = Array()

cadeiras.push(new Cadeira(3, true, `cinza`))

console.log(cadeira, cadeira1, cadeira2, cadeira3, cadeiras)
cadeira3.girarCadeira()

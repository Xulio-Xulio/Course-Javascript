class Animal {
    constructor() {
        this.velocidade = null
    }
}

class Cachorro extends Animal {
    constructor(cor, tamanho, orelhas, correr, dormir, rosnar) {
        super()
        this.tamanho = tamanho
        this.dormir = dormir
        this.cor = cor
        this.orelhas = orelhas
        this.correr = correr
        this.rosnar = rosnar
    }

    agitado() {
        if (this.correr === true) {
            console.log(`se prepare para se exercitar`)
        }
    }
}

let cachorro = new Cachorro(`Preto`, `Grande`, `Curta`, true, `Dorme pouco`, `Manso` )

cachorro.agitado()
console.log(cachorro)


class Passaro extends Animal {
    constructor(cor, tamanho, bico, voar, dormir) {
        super()
        this.tamanho = tamanho
        this.dormir = dormir
        this.cor = cor
        this.bico = bico
        this.voar = voar
    }

    voa() {
        if (this.voar === true) {
            console.log(`Cuidado para não deixar fugir`)
        }
    }
}

let passaro = new Passaro(`Branco`, `Pequeno`, `Longo`, true, `Pouco`)

passaro.voa()
console.log(passaro)
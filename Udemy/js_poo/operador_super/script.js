class Animal {
    constructor(velocidade, tamanho, dormir, cor) {
        this.velocidade = velocidade
        this.tamanho = tamanho
        this.dormir = dormir
        this.cor = cor
    }
}

class Cachorro extends Animal {
    constructor(orelhas, correr, rosnar, velocidade, tamanho, dormir, cor) {
        super(velocidade, tamanho, dormir, cor)
        this.orelhas = orelhas
        this.correr = correr
        this.rosnar = rosnar
    }
    
    agitado() {
    if (this.correr === true) {
        console.log(`se prepare para se exercitar`)
    }}
}

class Passaro extends Animal {
    constructor(bico, voar, velocidade, tamanho, dormir, cor) {
        super(velocidade, tamanho, dormir, cor)
        this.bico = bico
        this.voar = voar
    }

    voa() {
        if (this.voar === true) {
            console.log(`Cuidado para não deixar fugir`)
        }
    }
}

let cachorro = new Cachorro()
cachorro.agitado()
console.log(cachorro)

let passaro = new Passaro()
passaro.voa()
console.log(passaro)
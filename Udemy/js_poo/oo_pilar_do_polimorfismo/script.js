class Animal {
    constructor(cor, tamanho, velocidade) {
        this.cor = cor
        this.tamanho = tamanho
        this.velocidade = velocidade
    }
}

class Cachorro extends Animal {
    constructor(late, orelhas, correr, cor, tamanho, velocidade) {
        super(cor, tamanho, velocidade)
        this.late = late
        this.orelhas = orelhas
        this.correr = correr
    }

    peludo() {
        console.log(`Muito pelo!!!`)
    }

    agitado(){
        if (this.correr === true) {
            console.log(`É um chachorro agitado!!!`)
        }
        else {
            console.log(`È um cachorro calmo`)
        }
    }
    
}

class Buldog extends Cachorro {
    constructor(late, orelhas, correr, cor, tamanho, velocidade, babar){
        super(late, orelhas, correr, cor, tamanho, velocidade)
        this.babar = babar
    }

    peludo() {
        console.log(`Pouco pelo`)
    }
}

let cachorro = new Cachorro(true, `grande`, true, `azul`, `grande`, `rapido`)
console.log(cachorro)
cachorro.agitado()
cachorro.peludo()

let buldog = new Buldog(true, `grande`, false, `azul`, `grande`, `rapido`, `Muito`)
console.log(buldog)
buldog.agitado()
buldog.peludo()
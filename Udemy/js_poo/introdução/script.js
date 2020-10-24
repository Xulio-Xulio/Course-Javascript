class Calculadora {
    
    constructor() {
        this.a = 10
        this.b = 7
        this.operador = `mult`
    }

    calcular() {
        if(this.operador === `mult`) {
            console.log(this.a * this.b)
        }
    }
}

calculadora = new Calculadora()
calculadora.calcular()
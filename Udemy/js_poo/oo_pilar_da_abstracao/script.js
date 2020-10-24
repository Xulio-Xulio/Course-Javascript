/* Modelo da entidade/objeto */

class ContaBancaria {
    //agencia
    //numeroConta
    //saldo
    //limite
    constructor() {
        this.agencia = 0001
        this.numeroConta = 86514298    
        this.saldo = 500
        this.limite = 1000                                                                                                                                                
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo() {
        return this.saldo
    }
}

let x = new ContaBancaria()
let y = new ContaBancaria()

console.log(x.consultarSaldo())
x.depositar(1000)
console.log(x.consultarSaldo())


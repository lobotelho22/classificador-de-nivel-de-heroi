const { ARMA } = require("../src/globals");


class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }
    atacar() {
        console.log(`o ${this.tipo} atacou usando ${ARMA[this.tipo]}`);
    }
}

module.exports = {
    Heroi,
}

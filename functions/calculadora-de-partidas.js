const readlineSync = require('readline-sync');
const { obterNivel } = require('../src/obterNivel');

function calculadoraDePartidas() {
    const vitorias = readlineSync.questionInt("Informe o Número de Vitórias: ");
    const derrotas = readlineSync.questionInt("Informe o número de Derrotas: ");

    const saldo = vitorias - derrotas;

    const nivel = obterNivel(saldo, "ranking");
    
    console.log(`O Herói tem saldo ${ saldo } e está no nível ${ nivel }`);
}

module.exports = {
    calculadoraDePartidas,
}
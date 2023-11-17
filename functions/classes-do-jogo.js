const { Heroi } = require('../classes/heroi');
const readlineSync = require('readline-sync');
const { ARMA } = require('../src/globals');

function criarHeroi() {
    const nome = readlineSync.question('Informe o nome do Herói: ');
    const idade = readlineSync.questionInt('Informe a idade do Herói: ');

    const tiposDeHeroi = Object.keys(ARMA);
    const restringeTipoMsg = `Você deve escolher entre os tipos: ${ tiposDeHeroi }`; 

    readlineSync.setDefaultOptions({ limit: tiposDeHeroi, limitMessage: restringeTipoMsg })
    const tipo = readlineSync.question('Informe do tipo do Herói: ');

    const heroi = new Heroi(nome, idade, tipo);

    heroi.atacar();
}

module.exports = {
    criarHeroi,
}
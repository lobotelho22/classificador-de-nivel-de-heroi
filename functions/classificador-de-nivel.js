const { question, questionInt } = require('readline-sync');
const { obterNivel } = require('../src/obterNivel');

function classificador() {
    const nomeHeroi = question('Digite o nome do herói: ');
    const heroiXP = questionInt('Informe a experiência do herói: ');

    let nivelHeroi = obterNivel(heroiXP, "nivel");

    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
}

// classificador();

module.exports = {
    classificador
}

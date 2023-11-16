const { question, questionInt } = require('readline-sync');
const { obterNivel } = require('./src/obterNivel');

function main() {
    const nomeHeroi = question('Digite o nome do herói: ');
    const heroiXP = questionInt('Informe a experiência do herói: ');

    let nivelHeroi = obterNivel(heroiXP);

    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
}

main();

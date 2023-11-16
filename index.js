const { question, questionInt } = require('readline-sync');
const { NIVEIS } = require('./src/globals');

function obterNivel(XpHeroi) {

    if (XpHeroi < 1000) {
        return NIVEIS[0];
    } else if (XpHeroi < 2000) {
        return NIVEIS[1];
    } else if (XpHeroi < 5000) {
        return NIVEIS[2];
    } else if (XpHeroi < 7000) {
        return NIVEIS[3];
    } else if (XpHeroi < 8000) {
        return NIVEIS[4];
    } else if (XpHeroi < 9000) {
        return NIVEIS[5];
    } else if (XpHeroi < 10000) {
        return NIVEIS[6];
    }

    return NIVEIS[7]
}

function main() {
    const nomeHeroi = question('Digite o nome do herói: ');
    const heroiXP = questionInt('Informe a experiência do herói: ');

    let nivelHeroi = obterNivel(heroiXP);

    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
}

main();

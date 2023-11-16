const { question, questionInt } = require('readline-sync')

function obterNivel(XpHeroi) {
    const niveis = [
        "Ferro", "Bronze", "Prata", "Ouro", "Platina",
        "Ascendente", "Imortal", "Radiante"
    ]

    if (XpHeroi < 1000) {
        return niveis[0];
    } else if (XpHeroi < 2000) {
        return niveis[1];
    } else if (XpHeroi < 5000) {
        return niveis[2];
    } else if (XpHeroi < 7000) {
        return niveis[3];
    } else if (XpHeroi < 8000) {
        return niveis[4];
    } else if (XpHeroi < 9000) {
        return niveis[5];
    } else if (XpHeroi < 10000) {
        return niveis[6];
    }

    return niveis[7]
}

function main() {
    const nomeHeroi = question('Digite o nome do herói: ');
    const heroiXP = questionInt('Informe a experiência do herói: ');

    let nivelHeroi = obterNivel(heroiXP);

    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
}

main();

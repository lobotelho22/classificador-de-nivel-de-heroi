const { NIVEIS } = require('./globals');

function revelaRanking (XpHeroi) {

    if (XpHeroi < 10) {
        return NIVEIS[0];
    } else if (XpHeroi < 20) {
        return NIVEIS[1];
    } else if (XpHeroi < 50) {
        return NIVEIS[2];
    } else if (XpHeroi < 80) {
        return NIVEIS[3];
    } else if (XpHeroi < 90) {
        return NIVEIS[8];
    } else if (XpHeroi < 100) {
        return NIVEIS[9];
    }

    return NIVEIS[6];
}

function revelaNivel(XpHeroi) {
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

    return NIVEIS[7];
}

function obterNivel(XpHeroi, label) {

    if (label === "nivel") {
        const nivel = revelaNivel(XpHeroi);
        return nivel;
    } else if (label === "ranking") {
        const nivel = revelaRanking(XpHeroi);
        return nivel;
    }
}

module.exports = {
    obterNivel,
}

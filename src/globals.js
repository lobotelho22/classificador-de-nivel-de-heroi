const NIVEIS = [
    "Ferro", "Bronze", "Prata", "Ouro", "Platina",
    "Ascendente", "Imortal", "Radiante", "Diamante",
    "Lendário"
]

const ARMA = {
    mago: "magia",
    guerreiro: "espada",
    monge: "artes marciais",
    ninja: "shuriken",
}

const CLASSIFICADOR = {
    nome: "Classificador de Nível",
    url: './functions/classificador-de-nivel.js'
}

const CALCULADORA = {
    nome: "Calculadora de Partidas",
    url: './functions/calculadora-de-partidas.js'
}

const CRIA_HEROI = {
    nome: "Escrevendo as classes de um Jogo",
    url: './functions/classes-do-jogo.js'
}

module.exports = {
    ARMA,
    NIVEIS,
    CLASSIFICADOR,
    CALCULADORA,
    CRIA_HEROI,
};

const readlineSync = require('readline-sync');
const Table = require('cli-table3');
const { CLASSIFICADOR, CALCULADORA } = require('./src/globals');
const { classificador } = require('./functions/classificador-de-nivel');
const { calculadoraDePartidas } = require('./functions/calculadora-de-partidas');

function main() {
    const menuSelect = new Table({
        head: ['Opção', 'Projeto'],
        colWidths: [10, 50],
        colAligns: ["center", "center"],
    })

    menuSelect.push(
        [1, CLASSIFICADOR.nome],
        [2, CALCULADORA.nome]
    )

    console.log(menuSelect.toString());

    readlineSync.setDefaultOptions({
        limit: [1, 2],
        limitMessage: "Selecione uma das opções válidas"
    })

    const selecionaOpcao = readlineSync.question("Selecione uma opção: ");
    const opcaoSelecionada = Number.parseInt(selecionaOpcao);
    
    readlineSync.setDefaultOptions({ limit: null })

    switch (opcaoSelecionada) {
        case 1:
            classificador();
            break;
    
        case 2:
            calculadoraDePartidas();
            break;
    
        default:
            break;
    }
}

main ();
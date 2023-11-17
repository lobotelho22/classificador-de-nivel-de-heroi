const readlineSync = require('readline-sync');
const Table = require('cli-table3');
const { CLASSIFICADOR } = require('./src/globals');
const { classificador } = require('./functions/classificador-de-nivel');

function main() {
    const menuSelect = new Table({
        head: ['Opção', 'Projeto'],
        colWidths: [10, 50],
        colAligns: ["center", "center"],
    })

    menuSelect.push(
        [1, CLASSIFICADOR.nome]
    )

    console.log(menuSelect.toString());

    readlineSync.setDefaultOptions({
        limit: [1, 2],
        limitMessage: "Selecione uma das opções válidas"
    })

    const selecionaOpcao = readlineSync.question("Selecione uma opção: ");
    const opcaoSelecionada = Number.parseInt(selecionaOpcao);

    switch (opcaoSelecionada) {
        case 1:
            readlineSync.setDefaultOptions({ limit: null })
            classificador();
            break;
    
        default:
            break;
    }
}

main ();
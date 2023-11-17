const readlineSync = require('readline-sync');
const Table = require('cli-table3');
const { CLASSIFICADOR, CALCULADORA, CRIA_HEROI } = require('./src/globals');
const { calculadoraDePartidas, classificador, criarHeroi } = require('./functions');

function main() {
    const menuSelect = new Table({
        head: ['Opção', 'Projeto'],
        colWidths: [10, 50],
        colAligns: ["center", "center"],
    });

    menuSelect.push(
        [1, CLASSIFICADOR.nome],
        [2, CALCULADORA.nome],
        [3, CRIA_HEROI.nome]
    );

    console.log(menuSelect.toString());

    readlineSync.setDefaultOptions({
        limit: [1, 2, 3],
        limitMessage: "Selecione uma das opções válidas"
    });

    const selecionaOpcao = readlineSync.question("Selecione uma opção: ");
    const opcaoSelecionada = Number.parseInt(selecionaOpcao);
    
    readlineSync.setDefaultOptions({ limit: null });

    switch (opcaoSelecionada) {
        case 1:
            classificador();
            break;
    
        case 2:
            calculadoraDePartidas();
            break;
        
        case 3:
            criarHeroi();
            break;
        
        default:
            break;
    }
}

main ();

const { question } = require('readline-sync')

function main () {
    console.log('teste');
    const nomeDoHeroi = question('Digite o nome do herói: ');
    console.log(nomeDoHeroi);
}

main();

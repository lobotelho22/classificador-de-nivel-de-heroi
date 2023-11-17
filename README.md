# Projetos do Curso de Introdução a Lógica de Programação

O presente repositório contém os projetos desenvolvidos no decorrer do curso de *Introdução à Lógica de Programação*, da Dio. Para melhor controlar o acesso ao conteúdo, desenvolvi um menu com as opções para acesso aos testes dos projetos. Utilizei para isso o pacote [CLI-table3][2].

Além dele, para permitir as interações do usuário, através de inputs pela linha de comando do terminal, instalei a depenência [Readline-Sync][1].

Ambos os serviços são simples de usar, mas proporcionaram o teste dos scripts escritos, com a interação do usuário.

Para que seja possível o teste, é necessário, primeiro instalar as dependências do projeto, pelo comando:

``` bash
npm install
```

O próximo passo é executar nossa aplicação:

```bash
npm start
```

Prosseguiremos agora com as desecrições dos projetos.

## 1 - Classificador de Nível de Herói

Ao selecionar a opção 01, executamos o script do desafio **Classificador de Nível de Herói**, o primeiro projeto a ser entregue do curso de *Introdução a Lógica de Programação*, da Dio.

Este script pede que o usuário informe o *nome do personagem* e seus *pontos de experiência*. Então, uma função fará a relação entre a experiência do personagem e seu nivelamento atual.

## 2 - Calculadora de Partidas Rankeadas

Ao executarmos a opção 02, executamos o script de nosso segundo projeto, intitulado **Calculadora de Partidas Rankeadas**. Esse script solicitará ao usuário as informações de números de vitórias e derrotas do seu personagem. A partir dessas informações, o script retornará a informação do rankeamento atual do personagem.

## 3 - Escrevendo as classes de um Jogo

Nesse projeto, criamos uma classe genérica que representa um herói de uma aventura, com as propriedades: *nome*, *idade* e *tipo*, e também o método *atacar*.

O usuário insere os dados da propriedade através da CLI e o script chama o método de ataque, exibindo uma mensagem de retorno.

<!-- LINKS -->

[1]: https://www.npmjs.com/package/readline-sync
[2]: https://www.npmjs.com/package/cli-table3
/* 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo. */
function exercicio1() {
    let alunos = 0;
    let soma = 0;
    let idade = 0;

    while (idade != 999) {
        soma += idade;

        idade = Number(prompt("digite sua idade: "));

        if (!idade) {
            document.write("valro invalido");
            return;
        }
        if (idade === 999) {
            let media = soma / alunos;
            document.write(`<p>media de idade é ${media} </p>`);
            document.write(`<p>quantidade de alunos ${alunos}</p>`);
            return;
        }

        alunos++;
    }
}

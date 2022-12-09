/* 5. Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas. */

function atividade5() {
    let distância = Number(prompt("digite distancia: "));
    if (distância < 200) {
        document.write(`Valor passagem é ${distância * 0.5}`);
    } else {
        distância < 200;
        document.write(`Valor passagem é ${distância * 0.45}`);
    }
}

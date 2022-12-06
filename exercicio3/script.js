/* 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou! */

let numero1 = 3;
let numero2 = 10;
let numero3 = 2;

for (let i = numero1; i <= numero2; i += numero3) {
    document.write(`${i} `);
}
document.write("Acabou!");

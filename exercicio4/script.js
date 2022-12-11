/* 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto

b. Mulheres ganham 13% de desconto */

function atividade4() {
    let nome = prompt("insira nome");
    let sexo = prompt("insira sexo");
    if (sexo)
        if (sexo == "h" || sexo == "homem") {
            sexo = 1;
        } else if (sexo == "m" || sexo == "mulher") {
            sexo = 2;
        } else {
            sexo = 3;
            alert("sexo invalido");
            return;
        }
    let valor = Number(prompt("insira o valor"));
    if (!valor || valor < 0) {
        document.write("valor invalido");
        return;
    }
    if (sexo != 3) {
        switch (sexo) {
            case 1:
                document.write(
                    `Cliente ${nome}, Masculino, valor de ${valor * (1 - 0.05)}`
                );
                break;
            case 2:
                document.write(
                    `Cliente ${nome}, Feminino valor de ${valor * (1 - 0.13)}`
                );
                break;
            default:
                document.write("operador invalido");
                break;
        }
    }
}

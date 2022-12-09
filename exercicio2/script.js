/* 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário. */

function atividade2() {
    let continuar;
    while (continuar !== 1) {
        let salario1 = 0;
        let salario2 = 0;

        let sexo = prompt("Informe o sexo").toLowerCase();
        if (sexo == "h" || sexo == "homem") {
            sexo = 1;
        } else if (sexo == "m" || sexo == "mulher") {
            sexo = 2;
        } else {
            alert("sexo invalido");
            break;
        }
        switch (sexo) {
            case "1":
                salario1 += "informar salario";
                continuar = Number(
                    prompt("Digite 0 para continuar ou 1 para parar:")
                );
                break;
            default:
                salario2 += Number(prompt("Informe seu salario:"));
                continuar = Number(
                    prompt("Digite 0 para continuar ou 1 para parar:")
                );
                break;
        }
        if (salario1 > 0) {
            document.write(<p>Total pago aos homens: ${salario1}</p>);
            document.write(<p>Total pago as Mulheres: ${salario2}</p>);
        }
    }
}

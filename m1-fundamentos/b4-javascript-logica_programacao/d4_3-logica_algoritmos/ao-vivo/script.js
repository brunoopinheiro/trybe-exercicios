//Simulando dados de acesso ao sistema

let userName = 'Tamara Simões';
let userPassword = 1234;
let access = false;

// 1 - Como validar se a senha passada é igual para ser validade?

if (userName === 'Tamara Simões' && userPassword === 1234) {
    console.log("Acesso permitido!");
    access = true;
} else {
    access = false;
    console.log("Acesso Negado.");
}

// 2 - Faça um programa que com determinada quantidade, adicione pães em uma sacola e exiba quantos pães foram adicionados um por um se o acesso for permitido. Se não permitido o acesso, mostre uma mensagem de erro.

const paes = 10;
let sacola;

if (access === true) {
    //for (inicializacao; verificacao; atualizacao) {logica de repeticao}
    for (let index = 1; index <= paes; index += 1){
        sacola = index;
        console.log("Quantidade de pães:" + sacola);
    }
} else {
    console.log("Erro! Acesso Negado.");
}


// 3 - Code Review - Crie a primeira receita do robô. Ingredientes: Pão, 5 pedaços de queijo, pão, 5 pedaços de quejo e fecha com pão de fechamento.

for (let index = 0; index < 2; index += 1){
    console.log("Pão");

    for(let indexQueijo = 0; indexQueijo < 5; indexQUeijo += 1){
        console.log("Queijo");
    }
}
console.log("Pão de fechamento");
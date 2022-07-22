//soma 1 a 50 (for)

const n = 50;
let soma = 0;

for (let i = 1; i <= n; i += 1){
    soma += i;
}
console.log(soma);

//divisiveis por 3 entre 2 e 150. Caso qnt === 50, msg secreta.

const number = 150;
let divisiveis = 0;

for (let index = 2; index <= number; index += 1){
    if(index % 3 === 0){
        divisiveis += 1;
    }
}
if (divisiveis === 50){
    console.log("Mensagem secreta!");
    console.log(divisiveis + " divisiveis por " + number);
} else {
    console.log(divisiveis + " divisiveis por " + number);
}

//3 pessoas, idades diferentes

let pessoaX = 9;
let pessoaY = 13;
let pessoaZ = 10;


let pessoas = [pessoaX, pessoaY, pessoaZ];
let menorIdade = pessoas[0];
//let pessoa; //usado somente na versao IF

for (let j = 0; j < pessoas.length; j += 1){
    if (menorIdade > pessoas [j]){
        menorIdade = pessoas[j];
    }
}
console.log(menorIdade);

//CODIGO VERSAO COM IF

// if (pessoaX < pessoaY && pessoaX < pessoaZ){
//     menorIdade = pessoaX;
//     pessoa = "X";
// }else if (pessoaY < pessoaX && pessoaY < pessoaZ){
//     menorIdade = pessoaY;
//     pessoa = "Y";
// }else {
//     menorIdade = pessoaZ;
//     pessoa = "Z";
// }

// console.log("Pessoa " + pessoa + " é mais nova.");
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//p1

// for (let number of numbers){
//     console.log(number);
// }

// //p2
// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     soma += numbers[i];
// }
// //console.log(soma);

// //p3
// let media = soma / numbers.length;
// //console.log(media);

// //p4
// if(media > 20){
//     console.log("Valor maior que 20");
// }
// else {
//     console.log("Valor menor que 20");
// }

// //p5
// let maiorValor = 0;
// for (let j = 0; j < numbers.length; j += 1){
//     if (maiorValor < numbers[j]){
//         maiorValor = numbers[j];
//     }
// }
// console.log(maiorValor);

// //p6
// let valoresImpares = 0;
// for (let k = 0; k < numbers.length; k += 1){
//     if (numbers[k] % 2 !== 0){
//         valoresImpares += 1
//     }
// }
// if (valoresImpares > 0){
//     console.log("O array contem " + valoresImpares + " valores impares.");
// }
// else {
//     console.log("Nenhum valor impar encontrado.");
// }

//p7
let menorValor = numbers[0];
for (let l = 0; l < numbers.length; l += 1){
    if (menorValor > numbers[l]){
        menorValor = numbers[l];
    }
}
console.log(menorValor);
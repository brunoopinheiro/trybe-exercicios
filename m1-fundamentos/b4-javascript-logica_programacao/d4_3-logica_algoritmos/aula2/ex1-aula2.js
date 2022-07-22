let fruits = [3, 4, 10, 1, 12];

let soma = 0;

for (let fruit of fruits){
    soma += fruit;
}

if (soma > 15){
    console.log(soma);
}
else{
    console.log("Valor menor que 16");
}
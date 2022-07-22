let maiorPrimo;
const limite = 50;

for (let i = 2; i <= limite; i += 1){
    let divisores = 0;
    for (let j = i; j > 0; j -= 1){
        if (i % j === 0){
            divisores += 1;
        }
    }
    if (divisores === 2){
        maiorPrimo = i;
    }
}
console.log(maiorPrimo);
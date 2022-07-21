let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let nMulti = [];
for (let a = 0; a < numbers.length; a += 1){
    if (a === numbers.length - 1){
        nMulti.push(numbers[a] * 2);
    }
    else {
        nMulti.push(numbers[a] * numbers[a + 1]);
    }
}
console.log(nMulti);

//bubble sort
//contador de iteracoes
for (let iteracoes = 0; iteracoes < numbers.length - 1; iteracoes += 1){

    //ordenacao
    for (let i = 0; i < numbers.length - iteracoes; i += 1){
        if (numbers[i] > numbers[i + 1]){
            let aux = numbers[i];
            numbers[i] = numbers [i + 1];
            numbers[i + 1] = aux;
        }
    }

}

console.log(numbers);
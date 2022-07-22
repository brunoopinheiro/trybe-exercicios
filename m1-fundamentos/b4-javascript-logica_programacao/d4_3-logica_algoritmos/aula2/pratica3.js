let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = "";
for (let i = 0; i < array.length; i += 1){
    let a = array[i];
    if (maior.length < a.length){
        maior = a;
    }
}
console.log("A maior palavra eh: ", maior);

let menor = array[0];
for (let j = 0; j < array.length; j += 1){
    let a = array[j];
    if (menor.length > a.length){
        menor = a;
    }
}
console.log("A menor palavra eh: ", menor);
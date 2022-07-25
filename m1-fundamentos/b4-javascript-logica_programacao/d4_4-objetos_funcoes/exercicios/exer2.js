//1
function verificaPalindrome(word) {
    let drow = [];
    for (let letter of word) {
        drow.push(letter);
    }
    drow.reverse();
    drow = drow.join("");
    if (word === drow) {
        return true;
    } else {
        return false;
    }
}

//2
function higherValueIndex(integers) {
    let hvIndex = 0;
    for (let key in integers) {
        if (integers[key] > integers[hvIndex]) {
            hvIndex = key;
        }
    }
    return hvIndex;
}

let a = [2, 3, 6, 7, 10, 1];
console.log(higherValueIndex(a));

//3
function lowerValueIndex(integers) {
    let lvIndex = 0;
    for (let key in integers) {
        if (integers[key] < integers[lvIndex]) {
            lvIndex = key;
        }

    }
    return lvIndex;
}
let b = [2, 4, 6, 7, 10, 0, -3];
console.log(lowerValueIndex(b));

//4
function maiorNome(nomes){
    let mNome = "";
    for (let nome of nomes){
        if (mNome.length < nome.length){
            mNome = nome;
        }
    }
    return mNome;
}
let c = ["Jose", "Lucas", "Nadia", "Fernanda", "Cairo", "Joana"];
console.log(maiorNome(c));

//5

//percorrer o array inteiro
function maisRepete(sequencia){
    let numUnicos = [];
    //define array de numeros unicos
    for (let numero of sequencia){
        if(!numUnicos.includes(numero)){
            numUnicos.push(numero)
        }
    }
    let nUnic = 0; //guarda numero que mais se repete
    let nReps = 0; //guarda quant repeticoes do numero
    //conta quanto cada numero se repete
    for (let numero of numUnicos){
        let repeat = 0; //guarda repeticoes do numero atual
        for (let n of sequencia){
            if(n === numero){
                repeat += 1;
            }
        }
        if(repeat > nReps){
            nReps = repeat;
            nUnic = numero;
        }
    }
    return nUnic;
};
//array teste
let d = [2, 3, 2, 5, 8, 2, 3];
console.log(maisRepete(d));

//6
function somatorio(n){
    if (n <= 0){
        return "Numero invalido."
    }else{
        let result = 0
        for (let i = 1; i <= n; i += 1){
            result += i;
        }
        return result;
    }
}

console.log(somatorio(5));

//7
function isEnding (stringA, stringB){
    let word = "";
    let ending = "";
    word = stringA;
    ending = stringB;

    let x = ending.length; //index de inicio de comparacao

    let status = false;
    let j = 0; //percorre stringB
    for (let i = word.length - x; i < word.length; i += 1){
        if (word[i] === ending [j]){
            status = true;
        } else {
            status = false;
            break;
        }
        j += 1;
    }
    return status;
}

console.log(isEnding("testingthisfunctiontoitsmaximum", "toitsmaximum"));
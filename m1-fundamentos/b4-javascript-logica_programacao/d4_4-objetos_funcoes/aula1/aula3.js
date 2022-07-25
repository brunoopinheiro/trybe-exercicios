let statusCar = false;
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
    if (statusCar === false) {
        statusCar = true;
    } else {
        statusCar = false;
    };
};

function acelerar(incremento){
    aceleracao += incremento;
    return "Acelerando a " + aceleracao +  " m/s2";
}

function frear(decremento){
    aceleracao -= decremento;
    return "Desacelerando para " + aceleracao + " m/s2";
}

function girarVolante(anguloRotacao){
    rotacaoDoVolante = anguloRotacao;
    return rotacaoDoVolante;
}

//exemplo2

function bomDiaTryber(nome){
    console.log('Bom dia, ' + nome);
};

bomDiaTryber('Joao');
bomDiaTryber('Julia');
bomDiaTryber('Marcelo');

//exemplo3
function soma(a, b) {
    let resultado = a + b;
    return resultado;
}
console.log(soma(5, 2));

//exemplo 4
function maiorNum(primeiroNum, segundoNum){
    if(primeiroNum > segundoNum){
        return primeiroNum + ' maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
        return segundoNum + " maior que " + primeiroNum;
    } else {
        return 'Os numeros sao iguais';
    };
};

console.log(maiorNum(10, 20));
console.log(maiorNum(2, -5));
console.log(maiorNum(1, 1));
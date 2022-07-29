// 1 
console.log(document.getElementById('elementoOndeVoceEsta'));

// 2
let pai = document.getElementById('elementoOndeVoceEsta').parentNode;
pai.style.backgroundColor = "green";

// 3
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = "Eu sou o Primeiro Filho do Filho";

// 4
// console.log(document.getElementById('pai').firstElementChild);

// 5
// console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// 6
// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// 7
// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// 8
// let terceiroFilho = document.getElementById('pai').children;
// console.log(terceiroFilho[terceiroFilho.length - 2]);

// pratica da parte 2
// 1
let quintoFilho = document.createElement('span');
quintoFilho.innerText = "Quinto Filho. Eita.";
quintoFilho.id = 'quintoFilho';
pai.appendChild(quintoFilho);

// 2
let terceiroFilhoDoElemento = document.createElement('span');
terceiroFilhoDoElemento.id = 'terceiro';
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(terceiroFilhoDoElemento);

// 3
let bisneto = document.createElement('section');
bisneto.id = 'bisneto';
elementoOndeVoceEsta.firstElementChild.appendChild(bisneto);

// 4
let terceiroFilhoDeNovo = document.getElementById('primeiroFilhoDoFilho').firstElementChild.parentNode.parentNode.nextElementSibling;
console.log(terceiroFilhoDeNovo);

// pratica da parte 3
let primeiroFilho = document.getElementById('primeiroFilho');
let terceiroFilho = document.getElementById('terceiroFilho');
pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilho);
let atencao = elementoOndeVoceEsta.nextSibling;
pai.removeChild(atencao);
let quarto = document.getElementById('quartoEUltimoFilho');
let quinto = document.getElementById('quintoFilho');
pai.removeChild(quarto);
pai.removeChild(quinto);

let segundoOnde = document.getElementById('segundoEUltimoFilhoDoFilho');
let terceiroOnde = document.getElementById('terceiro');
elementoOndeVoceEsta.removeChild(segundoOnde);
elementoOndeVoceEsta.removeChild(terceiroOnde);

primeiroFilhoDoFilho.removeChild(bisneto);
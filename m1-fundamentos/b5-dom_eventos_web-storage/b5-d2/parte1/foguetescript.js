// 1 
console.log(document.getElementById('elementoOndeVoceEsta'));

// 2
let pai = document.getElementById('elementoOndeVoceEsta').parentNode.parentNode;
pai.style.backgroundColor = "green";

// 3
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = "Eu sou o Primeiro Filho do Filho";

// 4
console.log(document.getElementById('pai').firstElementChild);

// 5
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// 6
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// 7
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// 8
let terceiroFilho = document.getElementById('pai').children;
console.log(terceiroFilho[terceiroFilho.length - 2]);
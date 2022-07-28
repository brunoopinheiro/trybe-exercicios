let bodyList = document.getElementsByTagName('body');
body = bodyList[0];
// 1
let title = document.createElement('h1');
title.innerText = 'Exercicio 5.2 - Javascript DOM';
body.appendChild(title);

// 2
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// 3
let centerContent = document.createElement('section');
centerContent.className = 'center-content';
main.appendChild(centerContent);

// 4
let centerText = document.createElement('p');
centerText.innerText = 'Algum texto algum texto algum texto.';
centerContent.appendChild(centerText);

// 5
let leftContent = document.createElement('section');
leftContent.className = 'left-content';
main.appendChild(leftContent);

// 6
let rightContent = document.createElement('section');
rightContent.className = 'right-content';
main.appendChild(rightContent);

// 7
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftContent.appendChild(image);

// 8
let listaValores = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let listaNaoOrdenada = document.createElement('ul');
rightContent.appendChild(listaNaoOrdenada);
for (let i = 0; i < listaValores.length; i += 1) {
    let valor = document.createElement('li');
    valor.innerHTML = listaValores[i];
    listaNaoOrdenada.appendChild(valor);
}

// 9
for (let j = 0; j < 3; j += 1) {
    let h3 = document.createElement('h3');
    main.appendChild(h3);
}

// Segundo Bloco de Exercicios
// 1
title.className = 'title';

// 2
let descriptionList = document.querySelectorAll('h3');
for (let k = 0; k < descriptionList.length; k += 1) {
    descriptionList[k].className = 'description';
}

// 3
main.removeChild(leftContent);

// 4
rightContent.style.marginRight = 'auto';

// 5
centerContent.parentNode.style.backgroundColor = 'green';

// 6
let listaNumeros = document.querySelectorAll('li');
let cabecaLista = document.querySelector('.right-content ul');
for (let l = 0; l < listaNumeros.length; l += 1) {
    let numero = listaNumeros[l];
    if (numero.innerText.includes('nove') || numero.innerText.includes('dez')) {
        cabecaLista.removeChild(numero);
    }
}
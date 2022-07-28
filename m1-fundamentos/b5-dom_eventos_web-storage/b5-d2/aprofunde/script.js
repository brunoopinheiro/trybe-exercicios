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
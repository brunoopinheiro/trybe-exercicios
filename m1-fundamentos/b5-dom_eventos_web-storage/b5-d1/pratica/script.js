// 1 - mudar texto da segunda tag <p>-----<p>
let paragraphs = document.getElementsByTagName("p");
paragraphs[1].innerText = "Descrição de como me vejo daqui a 2 anos.";

// 2 - mudar fundo quadrado amarelo para verde Trybe
let mcContainer = document.getElementsByClassName("main-content");
mcContainer[0].style.backgroundColor = "rgb(76, 164, 109)";

// 3 - mudar fundo quadrado vermelho para branco
let centerContainer = document.getElementsByClassName("center-content");
centerContainer[0].style.backgroundColor = "white";

// 4 - Corrigir texto tag h1
let title = document.getElementsByClassName("title");
title[0].innerText = "Exercício 5.1 - JavaScript";

// 5 - Modificar todo o texto da tag p para maiusculo
for (let i = 0; i < paragraphs.length; i += 1) {
    paragraphs[i].style.textTransform = "uppercase";
}

// 6 - exibir todo o conteudo das tags p no console
for (let j = 0; j < paragraphs.length; j += 1) {
    console.log(paragraphs[j].innerText);
}
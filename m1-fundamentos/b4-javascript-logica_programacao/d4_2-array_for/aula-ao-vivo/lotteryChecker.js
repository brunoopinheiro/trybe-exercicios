//Nosso jogo
let studentGame = [21, 26, 19, 30, 33, 60];

//Jogo sorteado

//Math.floor(Math.random() * 6) + 1;

let megaSenaNumbers = []; //numeros sorteados
let display = []; //numeros unicos

//populando display com numeros unicos de 1 a 60
for (let d = 1; d < 61; d += 1){
    display.push(d);
}

//popular megaSenaNumbers com 6 numeros unicos retirados de display
for (let i = 0; i < 6; i += 1){
    let disponiveis = display.length; //conta quantas opcoes restam em display
    let number = Math.floor(Math.random() * disponiveis); //sorteia uma das posicoes restantes em display
    let sorteado = display[number]; //separa numero sorteado
    display.splice(number, 1); //retira numero sorteado do display
    megaSenaNumbers.push(sorteado);
}

//Quantidade de acertos
let numberOfHits = 0;
let hits = [];

for (let index = 0; index < megaSenaNumbers.length; index += 1){
    let drawNumber = megaSenaNumbers[index];

    for (let index2 = 0; index2 < studentGame.length; index2 +=1){
        let studentNumber = studentGame[index2];
        if (drawNumber === studentNumber) {
            numberOfHits += 1;
            hits.push(studentNumber);
        }
    }
}
console.log("Numeros Escolhidos: " + studentGame);
console.log("Numeros Mega-Sena: " + megaSenaNumbers);
console.log("---------------------");
console.log("E seu resultado foi:");
console.log("Acertos: ", numberOfHits);
console.log("Numeros corretos: ", hits);
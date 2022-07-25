//1 - crie um objeto player

let player = {
    firstName: 'Marta',
    lastName: 'Silva',
    age: '34',
    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

//2 - acesse as chaves firstName, lastName e age e concatene as suas informacoes para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade."

console.log('A jogadora ' + player.firstName + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo

//4 - Acesse a chave bestInTheWorld e faca um console.log no seguinte formato "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"
console.log('A jogadora ' + player.firstName + ' ' + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

//5 - Acesse a chave medals e faca um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata."

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");
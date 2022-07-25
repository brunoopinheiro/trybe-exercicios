//FOR/IN - percorre as propriedades dos objetos que forem enumeraveis com base na ordem de insercao, e nao nos valores das propriedades, ou seja, nos retorna o indice.

//pedidos de pizza
let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry: true,
};

for (let key in pizzas) {
    console.log(key + " " +pizzas[key]);
}

//for/in em arrays

let pizzasDoces = ["Chocolate", "Banana", "Morango"];

for (let key in pizzasDoces){
    console.log(key, pizzasDoces[key]);
}

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
    console.log(cars[index]);
}

//FOR/OF percorre os elementos dos objetos iteraveis atraves dos seus respectivos valores, e nao dos indices.
let food = ['hamburguer', 'bife', 'acaraje'];
for (let value of food){
    console.log(value);
}
let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate']; //posicaoArray = [0, 1, 2, 3, ..., n-1, n];

pizzas[5] = 'Peito de Peru';

//console.log(pizzas);

pizzas[4] = 'Sobrescrevendo';

//console.log(pizzas);

pizzas.push('Adicionando ao final');

//console.log(pizzas);

//console.log(pizzas.length);

//console.log(pizzas.sort());

//console.log(pizzas[0]);

for (let index = 0; index < pizzas.length; index++) {
    console.log(pizzas[index]);
}
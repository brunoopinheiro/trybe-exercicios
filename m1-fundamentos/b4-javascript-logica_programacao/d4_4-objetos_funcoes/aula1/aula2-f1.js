//1 - usando o objeto abaixo, utilize for/in para imprimir 'ola xxxxx' para cada nome do objeto

let names = {
    person1: 'Joao',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let person in names){
    console.log("Ola " + names[person]);
}

//2 - usando o objeto abaixo, utilize for/in e imprima um log com as chaves e valores do objeto

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: '2020',
};

for (let key in car){
    console.log(key, car[key]);
}
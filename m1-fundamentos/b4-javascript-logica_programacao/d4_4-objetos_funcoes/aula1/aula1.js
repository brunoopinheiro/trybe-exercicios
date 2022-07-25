let singer = {
    firstName: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    'kebab-case': true, //outra forma de declarar variaveis de nomes compostos
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

console.log('O cantor ' + singer.firstName + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

console.log('O cantor ' + singer['firstName'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

singer['fullName'] = singer.firstName + ' ' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName + 'nasceu no estado do ' + singer.bornInfo.state);

//As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com numeros, como 0, por exemplo, só é possível usando a notação de colchetes. Se você usar a notação de ponto, um erro será retornado.

console.log(singer['kebab-case']); //como acessar variaveis declaradas dessa forma

let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        bankName: 'TrybeBank'
    },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]);
console.log(conta[infoDoBanco]['bankName']);

console.log(conta.agencia);
console.log(conta['agencia']);

console.log(conta.banco.cod);
console.log(conta['banco']['id']);

let usuario = {
    id: 99,
    email: 'jakeperalta@nypd.b99.gov',
    infoPessoal: {
        firstName: 'Jake',
        lastName: 'Peralta',
        address: {
            street: 'Smith Street',
            neighborhood: 'Brooklyn',
            city: 'New York',
            state: 'New York',
        },
    },
};

console.log(usuario['id']);
console.log(usuario.email);

console.log(usuario.infoPessoal.address.street);
console.log(usuario['infoPessoal']['address']['city']);

console.table(usuario);

//exemplo objeto dentro de array
let moradores = [
    {
        firstName: 'Luiza',
        lastName: 'Guimaraes',
        andar: 10,
        apartamento: 1005,
    },
    {
        firstName: 'William',
        lastName: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        firstName: 'Murilo',
        lastName: 'Ferraz',
        andar: 8,
        apartamento: 804,
    },
    {
        firstName: 'Zoey',
        lastName: 'Brooks',
        andar: 1,
        apartamento: 101,
    },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador);
console.log(primeiroMorador['andar']);

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador);
console.log(ultimoMorador.firstName);

console.table(moradores);
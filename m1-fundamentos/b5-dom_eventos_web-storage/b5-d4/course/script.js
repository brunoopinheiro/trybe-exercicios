// console.log(localStorage.length);
// localStorage.setItem('firstName', 'Adam');
// localStorage.setItem('lastName', 'Smith');
// console.log(localStorage.getItem('lastName'));
// console.log(localStorage.length);
// localStorage.removeItem('lastName');
// console.log(localStorage.length);
// localStorage.clear();
// console.log(localStorage.length);

// console.log(sessionStorage.length);
// sessionStorage.setItem('firstName', 'Adam');
// sessionStorage.setItem('lastName', 'Smith');
// console.log(sessionStorage.getItem('lastName'));
// console.log(sessionStorage.length);
// sessionStorage.removeItem('lastName');
// console.log(sessionStorage.length);
// sessionStorage.clear();
// console.log(sessionStorage.length);

const myObj = {
    name: 'Link',
    age: 20,
};

// transformar objeto em string
localStorage.setItem('myData', JSON.stringify(myObj));

// recuperar objeto no formato original
const recoveredObject = JSON.parse(localStorage.getItem('myData'));

console.log(recoveredObject);

let organization = {
    name: 'trybe',
    since: 2019,
};

// variavel 'storage' pode ser localStorage ou sessionStorage
let storage = localStorage;

storage.setItem('escola', JSON.stringify(organization));
let org = JSON.parse(storage.getItem('escola'));
console.log(org);

let classes = ['2019/set', '2019/oct'];
storage.setItem('turmas', JSON.stringify(classes));
let cls = JSON.parse(storage.getItem('turmas'));
console.log(cls);
import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const math = new Subject('Matematica');
const history = new Subject('Historia');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.assignmentsGrades = [50, 45];

console.log(marta);
console.log(joao);
console.log(lucio);
console.log(carolina);
console.log(lucas);

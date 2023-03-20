interface Person {
  name: string;
  info: string;
}

class Student implements Person {
  constructor(
    public name: string,
    public school: string
  ) { }

  get info() {
    return `${this.name} estuda no colegio ${this.school}`;
  }
}

class Professor implements Person {
  constructor(
    public name: string,
    public school: string,
    public subject: string,
  ) { }

  get info() {
    return `${this.name} leciona ${this.subject} no colegio ${this.school}`;
  }
}

function printInfo(person: Person) {
  console.log(person.info);
}

const student = new Student('Joao', 'Batuta');
const professor = new Professor('Maria', 'Batuta', 'Sociologia');

printInfo(student);
printInfo(professor);

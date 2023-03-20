interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

// class Animal {
//   constructor(public name: string, protected birthdate: Date) { }

//   get age() {
//       const timeDiff = Math.abs(
//           Date.now() - new Date(this.birthdate).getTime()
//       );

//       return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//   }
// }

// class Mammal extends Animal {
//   walk() {
//       console.log(`${this.name} is walking!`);
//   }
// }

class Bird implements Animal {
  constructor(public name: string, private birthDate: Date) { }

  get age() {
    const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate(): Date {
      return this.birthDate;
  }

  fly() {
      console.log(`${this.name} is flying!`);
  }
}

// const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));

const parrot = new Bird('Papagaio', new Date(Date.parse('Aug 16, 2015')));

// const main = (animal: Animal) => {
//   console.log(animal.age);
// }

// main(tiger);
// tiger.walk();

parrot.fly();
console.log(parrot.age);

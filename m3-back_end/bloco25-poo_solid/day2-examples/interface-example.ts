interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }
  public myFunc(myParam: number): string {
    return `${this.myNumber} + ${myParam} = ${this.myNumber + myParam}`;
  }
}

const myObject = new MyClass(8);
console.log(myObject.myNumber);
console.log(myObject.myFunc(22));

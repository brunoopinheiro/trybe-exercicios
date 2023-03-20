class Superclass {
  constructor (public isSuper: boolean) {
      this.isSuper = true;
  }

  public sayHello(): void {
      console.log('Hello World!');
  }
}

class Subclass extends Superclass {

}

const myFunc = (superclass: Superclass) => {
  superclass.sayHello();
}

const superObject = new Superclass(true);
const subObject = new Subclass(true);

myFunc(superObject);
myFunc(subObject);

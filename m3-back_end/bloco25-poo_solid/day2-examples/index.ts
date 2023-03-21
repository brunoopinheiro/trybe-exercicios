class Superclass {
  public isSuper: boolean
  constructor () {
      this.isSuper = true;
  }

  public sayHello(): void {
      console.log('Hello World!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (superclass: Superclass) => {
  superclass.sayHello();
  if (superclass.isSuper === true) {
    console.log('Super!');
  } else {
    console.log('Sub!');
  }
}

const superObject = new Superclass();
const subObject = new Subclass();

myFunc(superObject);
myFunc(subObject);

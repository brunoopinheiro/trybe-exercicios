class Vehicle {
  constructor(
    public brand: string,
    private automaker: string) { }

  public speed(): string {
    console.log(`The ${this.brand} accelerates!`);
    return `The ${this.brand} accelerates!`;
  }
}

class Car extends Vehicle {
  constructor(
    brand: string,
    automaker: string
  ) {
    super(brand, automaker);
  }

  public speed(): string {
    console.log(`Acelera o ${this.brand}!`);
    return super.speed() + `Acelera o ${this.brand}!`;
  }
}

const carro = new Car('Polo', 'VW');
carro.speed();
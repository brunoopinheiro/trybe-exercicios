import IShape from "./IShape";

class Triangle implements IShape {
  constructor (private base: number, private height: number) { }

  get area(): number {
    return (this.base * this.height) / 2;
  }
}

export default Triangle;
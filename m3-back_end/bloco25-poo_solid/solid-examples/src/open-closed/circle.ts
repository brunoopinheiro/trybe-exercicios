import IShape from "./IShape";

class Circle implements IShape {
  private _radius: number;
  
  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number { return this._radius; }

  get area(): number {
    return Math.PI * this._radius ** 2;
  }
}

export default Circle;
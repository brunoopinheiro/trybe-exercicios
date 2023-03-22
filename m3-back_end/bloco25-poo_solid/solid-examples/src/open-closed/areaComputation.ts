import IShape from "./IShape";

class AreaComputation {
  private _shapes: IShape[];

  constructor(shapes: IShape[]) {
    this._shapes = shapes;
  }

  totalArea(): number {
    return this._shapes.reduce((acc, shape) => acc + shape.area, 0);
  }
}

export default AreaComputation;
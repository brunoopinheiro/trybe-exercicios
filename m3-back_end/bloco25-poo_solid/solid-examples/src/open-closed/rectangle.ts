import IShape from "./IShape";

class Rectangle implements IShape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get width(): number { return this._width; }
  get height(): number { return this._height; }

  get area(): number {
    return this._height * this._width;
  }
}

export default Rectangle;
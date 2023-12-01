import {DirectionEnum} from "../enums/DirectionEnum.ts";

export class Position {

  private _x: number;
  private _y: number;
  private _direction: DirectionEnum;

  constructor(x: number, y: number, direction: DirectionEnum) {
    this._x = x;
    this._y = y;
    this._direction = direction;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get direction(): DirectionEnum {
    return this._direction;
  }

  set direction(value: DirectionEnum) {
    this._direction = value;
  }
  set x(value: number) {
    this._x = value;
  }
  set y(value: number) {
    this._y = value;
  }
}
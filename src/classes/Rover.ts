// @ts-ignore
import {Planete} from "./Planete.ts";
import {Position} from "./Position.ts";
import {DirectionEnum} from "../enums/DirectionEnum.ts";

export class Rover {
  private position: Position;
  private planete: Planete;

  private directionsForward = {
    'N': { x: 0, y: -1 },
    'E': { x: 1, y: 0 },
    'S': { x: 0, y: 1 },
    'W': { x: -1, y: 0 }
  };

  private directionsBackward = {
    'N': { x: 0, y: 1 },
    'E': { x: -1, y: 0 },
    'S': { x: 0, y: -1 },
    'W': { x: 1, y: 0 }
  };

  private directionsLeft = {
    'N': DirectionEnum.OUEST,
    'E': DirectionEnum.NORD,
    'S': DirectionEnum.EST,
    'W': DirectionEnum.SUD
  };

  private directionsRight = {
    'N': DirectionEnum.EST,
    'E': DirectionEnum.SUD,
    'S': DirectionEnum.OUEST,
    'W': DirectionEnum.NORD
  };

  constructor(position: Position, planete: Planete) {
    this.position = position;
    this.planete = planete;
  }

  public move(keyUp: string) {
    const direction = keyUp === "ArrowUp"
        ? this.directionsForward[this.position.direction]
        : this.directionsBackward[this.position.direction]

    this.position.x = (this.position.x + direction.x + this.planete.getSize()) % this.planete.getSize();
    this.position.y = (this.position.y + direction.y + this.planete.getSize()) % this.planete.getSize();

    return this.getPosition();
  }

  public turn(keyUp: string) {

    keyUp === "ArrowLeft"
      ? this.position.direction = this.directionsLeft[this.position.direction]
      : this.position.direction = this.directionsRight[this.position.direction]

    return this.getPosition();
  }

  public getPosition(): Position {
    return this.position;
  }

  public getPlanete(): Planete {
    return this.planete;
  }

}
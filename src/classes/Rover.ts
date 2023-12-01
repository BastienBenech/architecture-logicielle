// @ts-ignore
import {Planete} from "./Planete.ts";
import {Position} from "./Position.ts";
import {DirectionEnum} from "../enums/DirectionEnum.ts";

export class Rover {
  private position: Position;
  private planete: Planete;

  constructor(position: Position, planete: Planete) {
    this.position = position;
    this.planete = planete;
  }

  public moveForward(): Position {
    switch (this.position.direction) {
      case 'N':
        this.position.y = (this.position.y - 1 + this.planete.getSize()) % this.planete.getSize();
        break;
      case 'E':
        this.position.x = (this.position.x + 1) % this.planete.getSize();
        break;
      case 'S':
        this.position.y = (this.position.y + 1) % this.planete.getSize();
        break;
      case 'W':
        this.position.x = (this.position.x - 1 + this.planete.getSize()) % this.planete.getSize();
        break;
    }

    return this.getPosition();
  }

  public moveBackward(): Position {
    switch (this.position.direction) {
      case 'N':
        this.position.y = (this.position.y + 1) % this.planete.getSize();
        break;
      case 'E':
        this.position.x = (this.position.x - 1 + this.planete.getSize()) % this.planete.getSize();
        break;
      case 'S':
        this.position.y = (this.position.y - 1 + this.planete.getSize()) % this.planete.getSize();
        break;
      case 'W':
        this.position.x = (this.position.x + 1) % this.planete.getSize();
        break;
    }

    return this.getPosition();
  }

  public turnLeft(): Position {
    switch (this.position.direction) {
      case 'N':
        this.position.direction = DirectionEnum.OUEST;
        break;
      case 'E':
        this.position.direction = DirectionEnum.NORD;
        break;
      case 'S':
        this.position.direction = DirectionEnum.EST;
        break;
      case 'W':
        this.position.direction = DirectionEnum.SUD;
        break;
    }

    return this.getPosition();
  }

  public turnRight(): Position {
    switch (this.position.direction) {
      case 'N':
        this.position.direction = DirectionEnum.EST;
        break;
      case 'E':
        this.position.direction = DirectionEnum.SUD;
        break;
      case 'S':
        this.position.direction = DirectionEnum.OUEST;
        break;
      case 'W':
        this.position.direction = DirectionEnum.NORD;
        break;
    }

    return this.getPosition();
  }

  public getPosition(): Position {
    return this.position;
  }

  public getPlanete(): Planete {
    return this.planete;
  }

}
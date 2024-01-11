// @ts-ignore
import {Planete} from "./Planete.ts";
import {Position} from "./Position.ts";
import { directionsBackward, directionsForward, directionsLeft, directionsRight } from "../enums/Orientations.ts";

const MOVEMENT_KEYS = ["ArrowUp", "ArrowDown"];
const ROTATION_KEYS = ["ArrowLeft", "ArrowRight"];

export class Rover {
  private position: Position;
  private planete: Planete;

  constructor(position: Position, planete: Planete) {
    this.position = position;
    this.planete = planete;
  }

  public checkInputKey(key: string) {
    if (MOVEMENT_KEYS.includes(key))
      this.move(key)
    else if (ROTATION_KEYS.includes(key))
      this.turn(key)
  }

  private move(keyUp: string) {
    const direction = keyUp === "ArrowUp"
        ? directionsForward[this.position.direction]
        : directionsBackward[this.position.direction]

    this.position.x = (this.position.x + direction.x + this.planete.getSize()) % this.planete.getSize();
    this.position.y = (this.position.y + direction.y + this.planete.getSize()) % this.planete.getSize();

    return this.getPosition();
  }

  private turn(keyUp: string) {
    keyUp === "ArrowLeft"
      ? this.position.direction = directionsLeft[this.position.direction]
      : this.position.direction = directionsRight[this.position.direction]

    return this.getPosition();
  }

  public getPosition(): Position {
    return this.position;
  }

  public getPlanete(): Planete {
    return this.planete;
  }

}
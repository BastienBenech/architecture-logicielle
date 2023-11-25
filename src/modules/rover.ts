import { Playground } from "./playground";

export class Rover {
  x: number;
  y: number;
  direction: string;
  playground: Playground;
  constructor(playground: Playground) {
    this.x = 0;
    this.y = 0;
    this.direction = "N";
    this.playground = playground;
  }

  logRoverState(): void {
    console.log(
      `Rover is at position ${this.x}, ${this.y} facing ${this.direction}`
    );
  }

  move(command: KeyboardEvent): void {
    console.log(`${command.key} key was pressed`);
    if (command.key === "ArrowLeft" || command.key.toUpperCase() === "Q") {
      this.turnLeft();
    } else if (
      command.key === "ArrowRight" ||
      command.key.toUpperCase() === "D"
    ) {
      this.turnRight();
    } else if (
      command.key === "ArrowUp" ||
      command.key.toUpperCase() === "Z" ||
      command.key === "Enter"
    ) {
      this.moveForward();
    }
    //this.playground.printGrid(this.x, this.y);
  }

  turnLeft(): void {
    if (this.direction === "N") {
      this.direction = "W";
    } else if (this.direction === "W") {
      this.direction = "S";
    } else if (this.direction === "S") {
      this.direction = "E";
    } else if (this.direction === "E") {
      this.direction = "N";
    }
    document.querySelector<HTMLImageElement>("#rover")!.style.transform =
      "rotate(180deg)";
    this.logRoverState();
  }

  turnRight(): void {
    if (this.direction === "N") {
      this.direction = "E";
    } else if (this.direction === "E") {
      this.direction = "S";
    } else if (this.direction === "S") {
      this.direction = "W";
    } else if (this.direction === "W") {
      this.direction = "N";
    }
    document.querySelector<HTMLImageElement>("#rover")!.style.transform =
      "rotate(0deg)";
    this.logRoverState();
  }

  moveForward(): void {
    if (this.direction === "N") {
      this.y += 1;
    } else if (this.direction === "E") {
      this.x += 1;
    } else if (this.direction === "S") {
      this.y -= 1;
    } else if (this.direction === "W") {
      this.x -= 1;
    }
    this.logRoverState();
  }
}

import { Playground } from "./playground";

export class Rover {
  x: number;
  y: number;
  direction: string;
  playground: Playground;
  constructor(playground: Playground) {
    this.x = 0;
    this.y = 0;
    this.direction = "E";
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
      if (this.direction === "W") {
        console.log("move forward to the West");
        this.x -= 1;
      } else {
        this.direction = "W";
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(180deg)";
      }
    } else if (
      command.key === "ArrowRight" ||
      command.key.toUpperCase() === "D"
    ) {
      if (this.direction === "E") {
        console.log("move forward to the East");
        this.x += 1;
      } else {
        this.direction = "E";
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(0deg)";
      }
    } else if (command.key === "ArrowUp" || command.key.toUpperCase() === "Z") {
      if (this.direction === "N") {
        console.log("move forward to the North");
        this.y -= 1;
      } else {
        this.direction = "N";
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(-90deg)";
      }
    } else if (
      command.key === "ArrowDown" ||
      command.key.toUpperCase() === "S"
    ) {
      if (this.direction === "S") {
        console.log("move forward to the South");
        this.y += 1;
      } else {
        this.direction = "S";
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(90deg)";
      }
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

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

  moveBackward(backwardDirection: string): void {
    if (backwardDirection === "W") {
      if (this.x + 1 === this.playground.width) {
        this.x = 0;
      } else {
        this.x += 1;
      }
    } else if (backwardDirection === "E") {
      if (this.x - 1 === -1) {
        this.x = this.playground.width - 1;
      } else {
        this.x -= 1;
      }
    } else if (backwardDirection === "N") {
      if (this.y + 1 === this.playground.height) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    } else if (backwardDirection === "S") {
      if (this.y - 1 === -1) {
        this.y = this.playground.height - 1;
      } else {
        this.y -= 1;
      }
    }
    this.playground.printRover(this.x, this.y);
  }

  move(command: KeyboardEvent): void {
    if (
      this.direction === "W" &&
      (command.key === "ArrowRight" || command.key.toUpperCase() === "D")
    ) {
      this.moveBackward("W");
    } else if (
      this.direction === "E" &&
      (command.key === "ArrowLeft" || command.key.toUpperCase() === "Q")
    ) {
      this.moveBackward("E");
    } else if (
      this.direction === "N" &&
      (command.key === "ArrowDown" || command.key.toUpperCase() === "S")
    ) {
      this.moveBackward("N");
    } else if (
      this.direction === "S" &&
      (command.key === "ArrowUp" || command.key.toUpperCase() === "Z")
    ) {
      this.moveBackward("S");
    } else {
      this.moveForward(command);
    }
  }

  moveForward(command: KeyboardEvent): void {
    console.log(`${command.key} key was pressed`);
    if (command.key === "ArrowLeft" || command.key.toUpperCase() === "Q") {
      if (this.direction === "W") {
        console.log("move forward to the West");
        if (this.x - 1 === -1) {
          this.x = this.playground.width - 1;
        } else {
          this.x -= 1;
        }
        this.playground.printRover(this.x, this.y);
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
        if (this.x + 1 === this.playground.width) {
          this.x = 0;
        } else {
          this.x += 1;
        }
        this.playground.printRover(this.x, this.y);
      } else {
        this.direction = "E";
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(0deg)";
      }
    } else if (command.key === "ArrowUp" || command.key.toUpperCase() === "Z") {
      if (this.direction === "N") {
        console.log("move forward to the North");
        if (this.y - 1 === -1) {
          this.y = this.playground.height - 1;
        } else {
          this.y -= 1;
        }
        this.playground.printRover(this.x, this.y);
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
        if (this.y + 1 === this.playground.height) {
          this.y = 0;
        } else {
          this.y += 1;
        }
        this.playground.printRover(this.x, this.y);
      } else {
        this.direction = "S";
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(90deg)";
      }
    }
  }
}

export class Rover {
  x: number;
  y: number;
  direction: string;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "N";
  }

  logRoverState(): void {
    console.log(
      `Rover is at position ${this.x}, ${this.y} facing ${this.direction}`
    );
  }

  move(command: string): void {
    if (command === "L") {
      this.turnLeft();
    } else if (command === "R") {
      this.turnRight();
    } else if (command === "M") {
      this.moveForward();
    }
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

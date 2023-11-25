export class Rover {
    constructor(playground) {
        this.x = 0;
        this.y = 0;
        this.direction = "N";
        this.playground = playground;
    }
    logRoverState() {
        console.log(`Rover is at position ${this.x}, ${this.y} facing ${this.direction}`);
    }
    move(command) {
        if (command === "L") {
            this.turnLeft();
        }
        else if (command === "R") {
            this.turnRight();
        }
        else if (command === "M") {
            this.moveForward();
        }
        this.playground.printGrid(this.x, this.y);
    }
    turnLeft() {
        if (this.direction === "N") {
            this.direction = "W";
        }
        else if (this.direction === "W") {
            this.direction = "S";
        }
        else if (this.direction === "S") {
            this.direction = "E";
        }
        else if (this.direction === "E") {
            this.direction = "N";
        }
        this.logRoverState();
    }
    turnRight() {
        if (this.direction === "N") {
            this.direction = "E";
        }
        else if (this.direction === "E") {
            this.direction = "S";
        }
        else if (this.direction === "S") {
            this.direction = "W";
        }
        else if (this.direction === "W") {
            this.direction = "N";
        }
        this.logRoverState();
    }
    moveForward() {
        if (this.direction === "N") {
            this.y += 1;
        }
        else if (this.direction === "E") {
            this.x += 1;
        }
        else if (this.direction === "S") {
            this.y -= 1;
        }
        else if (this.direction === "W") {
            this.x -= 1;
        }
        this.logRoverState();
    }
}

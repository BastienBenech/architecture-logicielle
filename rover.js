"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
var Rover = /** @class */ (function () {
    function Rover() {
        this.x = 0;
        this.y = 0;
        this.direction = "N";
    }
    Rover.prototype.logRoverState = function () {
        console.log("Rover is at position ".concat(this.x, ", ").concat(this.y, " facing ").concat(this.direction));
    };
    Rover.prototype.move = function (command) {
        if (command === "L") {
            this.turnLeft();
        }
        else if (command === "R") {
            this.turnRight();
        }
        else if (command === "M") {
            this.moveForward();
        }
    };
    Rover.prototype.turnLeft = function () {
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
    };
    Rover.prototype.turnRight = function () {
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
    };
    Rover.prototype.moveForward = function () {
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
    };
    return Rover;
}());
exports.Rover = Rover;

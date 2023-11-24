"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playground_1 = require("./playground");
var rover_1 = require("./rover");
function main() {
    var playground = new playground_1.Playground(12, 12);
    console.log("Welcome on Mars Rover! You can move the rover with the following commands:");
    console.log("Enter a command : L (turn on left), R (turn on right), M (move forward)");
    var rover = new rover_1.Rover(playground);
    playground.printGrid(rover.x, rover.y);
    process.openStdin().addListener("data", function (input) {
        var command = input.toString().trim();
        rover.move(command);
    });
}
main();

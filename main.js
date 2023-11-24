"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rover_1 = require("./rover");
function main() {
    var rover = new rover_1.Rover();
    //rover.logRoverState();
    process.openStdin().addListener("data", function (input) {
        var command = input.toString().trim();
        rover.move(command);
    });
    //const playground = new Playground(0, 0);
}
main();

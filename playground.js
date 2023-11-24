"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
var Playground = /** @class */ (function () {
    function Playground(width, height) {
        this.width = width;
        this.height = height;
    }
    Playground.prototype.printGrid = function (roverPosX, roverPosY) {
        for (var x = 0; x < this.width; x++) {
            var line = "";
            for (var y = 0; y < this.height; y++) {
                if (x === roverPosX && y === roverPosY) {
                    line += "R";
                }
                else {
                    line += ".";
                }
            }
            console.log(line);
        }
    };
    return Playground;
}());
exports.Playground = Playground;

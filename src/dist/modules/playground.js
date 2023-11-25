export class Playground {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    printGrid(roverPosX, roverPosY) {
        for (let x = 0; x < this.width; x++) {
            let line = "";
            for (let y = 0; y < this.height; y++) {
                if (x === roverPosX && y === roverPosY) {
                    line += "R";
                }
                else {
                    line += ".";
                }
            }
            console.log(line);
        }
    }
}

import { Playground } from "./playground";
import { Rover } from "./rover";
export class App {
    constructor(playgroudWidth, playgroundHeight) {
        this.playground = new Playground(playgroudWidth, playgroundHeight);
        this.rover = new Rover(this.playground);
    }
    run() {
        console.log("Welcome on Mars Rover! You can move the rover with the following commands:");
        console.log("Enter a command : L (turn on left), R (turn on right), M (move forward)");
        /* this.playground.printGrid(this.rover.x, this.rover.y);
        process.openStdin().addListener("data", (input) => {
          const command = input.toString().trim();
          this.rover.move(command);
        }); */
    }
}
const app = new App(10, 10);
app.run();

import { Playground } from "./modules/playground";
import { Rover } from "./modules/rover";

export class App {
  private playground: Playground;
  private rover: Rover;

  constructor(playgroudWidth: number, playgroundHeight: number) {
    this.playground = new Playground(playgroudWidth, playgroundHeight);
    this.rover = new Rover(this.playground);
  }

  run(): void {
    console.log(
      "Welcome on Mars Rover! You can move the rover with the following commands:"
    );
    console.log(
      "Enter a command : L (turn on left), R (turn on right), M (move forward)"
    );
    this.playground.printGrid();
  }
}

const app = new App(10, 10);
app.run();

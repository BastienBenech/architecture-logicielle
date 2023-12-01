import { Playground } from "./modules/playground";
import { Rover } from "./modules/rover";
import type { Van } from "./van-1.2.6.min.d.ts";
import van from "./van-1.2.6.min.js";
import { StarterScreen } from "./ui/starter-screen.ts";

export class App {
  private playground: Playground;
  private rover: Rover;
  private van: Van;

  constructor(playgroudWidth: number, playgroundHeight: number) {
    this.playground = new Playground(playgroudWidth, playgroundHeight);
    this.rover = new Rover(this.playground);
    this.van = van;
  }

  run(): void {
    this.van.add(document.body, StarterScreen());
    console.log(
      "Welcome on Mars Rover! You can move the rover with the following commands:"
    );
    console.log(
      "Enter a command : L (turn on left), R (turn on right), M (move forward)"
    );
    this.playground.printGrid();
    this.playground.printRover(0, 0);
    window.addEventListener("keydown", (event) => {
      event.preventDefault();
      this.rover.move(event);
    });
  }
}

const app = new App(10, 10);
app.run();

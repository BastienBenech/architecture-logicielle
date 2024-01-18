import { Rover } from "./classes/Rover.ts";
import { Planete } from "./classes/Planete.ts";
import { Position } from "./classes/Position.ts";
import { Grid } from "./classes/Grid.ts";
import { DirectionEnum } from "./enums/DirectionEnum.ts";

export class App {
  private rover: Rover;
  private grid: Grid;

  constructor(rover: Rover) {
    this.rover = rover;
    this.grid = new Grid(rover);
  }

  run(): void {
    this.grid.printGrid();
    this.grid.printRover(this.rover);
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
  }

  private handleKeyDown(event: KeyboardEvent) {
    this.rover.checkInputKey(event.key);
    this.grid.updateRoverDirection();
    this.grid.printRover(this.rover);
  }
}
const planete = new Planete(10);
const position = new Position(5, 5, DirectionEnum.NORD);
const rover = new Rover(position, planete);
const app = new App(rover);
app.run();

import { Playground } from "./playground";
import { Rover } from "./rover";

function main(): void {
  const playground = new Playground(12, 12);
  console.log(
    "Welcome on Mars Rover! You can move the rover with the following commands:"
  );
  console.log(
    "Enter a command : L (turn on left), R (turn on right), M (move forward)"
  );
  const rover = new Rover(playground);
  playground.printGrid(rover.x, rover.y);
  process.openStdin().addListener("data", (input) => {
    const command = input.toString().trim();
    rover.move(command);
  });
}

main();

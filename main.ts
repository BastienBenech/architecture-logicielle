import { Playground } from "./playground";
import { Rover } from "./rover";

function main(): void {
  const rover = new Rover();
  //rover.logRoverState();
  process.openStdin().addListener("data", (input) => {
    const command = input.toString().trim();
    rover.move(command);
  });
  //const playground = new Playground(0, 0);
}

main();

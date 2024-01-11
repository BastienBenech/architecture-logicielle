import {Rover} from "./classes/Rover.ts";
import {Planete} from "./classes/Planete.ts";
import {Position} from "./classes/Position.ts";
import {DirectionEnum} from "./enums/DirectionEnum.ts";

export class App {
    private rover: Rover;

    constructor(rover: Rover) {
        this.rover = rover;
    }

    printGrid(): void {
        document.querySelector<HTMLDivElement>("#app")!.innerHTML += `
    `;
        const grid = document.querySelector<HTMLDivElement>("#grid");
        for (let i = -1; i < this.rover.getPlanete().getSize(); i++) {
            const row = document.createElement("div");
            row.setAttribute("id", `row_${i.toString()}`);
            row.setAttribute("class", "row");
            if (grid !== undefined) {
                grid!.innerHTML += row.outerHTML;
            }

            const selectedRow = document.querySelector<HTMLDivElement>(
                `#row_${i.toString()}`
            );
            if (selectedRow !== undefined) {
                for (let j = 0; j < this.rover.getPlanete().getSize(); j++) {
                    if (j === 0 && i !== -1) {
                        const rowIndexCell = document.createElement("div");
                        rowIndexCell.setAttribute("id", `row_${i.toString()}_index`);
                        rowIndexCell.setAttribute("class", "row-index");
                        rowIndexCell!.innerText = i.toString();
                        if (selectedRow !== undefined) {
                            selectedRow!.innerHTML += rowIndexCell.outerHTML;
                        }
                    }
                    if (i === -1) {
                        const colIndexCell = document.createElement("div");
                        colIndexCell.setAttribute("id", `col_${j.toString()}_index`);
                        colIndexCell.setAttribute("class", "col-index");
                        colIndexCell!.innerText = j.toString();

                        selectedRow!.innerHTML += colIndexCell.outerHTML;
                    } else {
                        var cell = document.createElement("div");
                        cell.setAttribute("id", `row_${i}-col_${j.toString()}`);
                        cell.setAttribute("class", "cell");
                        selectedRow!.innerHTML += cell.outerHTML;
                    }
                }
            }
        }
    }

    printRover(rover: Rover): void {
        const newRover = document.createElement("img");
        const oldRover = document.querySelector<HTMLImageElement>("#rover");
        if (oldRover !== null) {
            oldRover.remove();
            newRover.style.transform = oldRover.style.transform;
        }
        newRover.setAttribute("id", "rover");
        newRover.setAttribute(
            "src",
            "https://cdn-icons-png.flaticon.com/512/1/1122.png"
        );

        document.querySelector(`#row_${rover.getPosition().y}-col_${rover.getPosition().x}`)?.appendChild(newRover);

        switch (rover.getPosition().direction) {
            case 'N':
                document.querySelector<HTMLImageElement>("#rover")!.style.transform =
                    "rotate(-90deg)";
                break;
            case 'E':
                document.querySelector<HTMLImageElement>("#rover")!.style.transform =
                    "rotate(0deg)";
                break;
            case 'S':
                document.querySelector<HTMLImageElement>("#rover")!.style.transform =
                    "rotate(90deg)";
                break;
            case 'W':
                document.querySelector<HTMLImageElement>("#rover")!.style.transform =
                    "rotate(180deg)";
                break;
        }
    }

    run(): void {
        this.printGrid();
        this.printRover(this.rover);
        document.addEventListener('keydown', (event) => this.handleKeyDown(event));
    }

    private handleKeyDown(event: KeyboardEvent) {
        this.rover.checkInputKey(event.key);
        this.printRover(this.rover);
    }

}
const planete = new Planete(10);
const position = new Position(5,5, DirectionEnum.NORD);
const rover = new Rover(position, planete);
const app = new App(rover);
app.run();
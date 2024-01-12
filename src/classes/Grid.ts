import { Rover } from "./Rover";

export class Grid {
  private grid: HTMLDivElement | null;
  private roverHtml: HTMLImageElement | null;
  private rover: Rover;

  constructor(rover: Rover) {
    this.grid = document.querySelector<HTMLDivElement>("#grid");
    this.roverHtml = document.querySelector<HTMLImageElement>("#rover");
    this.rover = rover;
  }

  public rotateRover(): void {
    switch (this.rover.getPosition().direction) {
      case "N":
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(-90deg)";
        break;
      case "E":
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(0deg)";
        break;
      case "S":
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(90deg)";
        break;
      case "W":
        document.querySelector<HTMLImageElement>("#rover")!.style.transform =
          "rotate(180deg)";
        break;
    }
  }

  private buildRoverHtml(): void {
    this.roverHtml = document.createElement("img");
    this.roverHtml.setAttribute("id", "rover");
    this.roverHtml.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/1/1122.png"
    );
  }

  public printRover(rover: Rover): void {
    if (this.roverHtml !== null) {
      const transform = this.roverHtml.style.transform;
      this.roverHtml.remove();
      this.buildRoverHtml();
      document
        .querySelector(
          `#row_${rover.getPosition().y}-col_${rover.getPosition().x}`
        )
        ?.appendChild(this.roverHtml!);
      this.roverHtml.style.transform = transform;
    } else {
      this.buildRoverHtml();
      document
        .querySelector(
          `#row_${rover.getPosition().y}-col_${rover.getPosition().x}`
        )
        ?.appendChild(this.roverHtml!);
    }
  }

  public printGrid(): void {
    for (let i = -1; i < this.rover.getPlanete().getSize(); i++) {
      const row = document.createElement("div");
      row.setAttribute("id", `row_${i.toString()}`);
      row.setAttribute("class", "row");
      if (this.grid !== undefined) {
        this.grid!.innerHTML += row.outerHTML;
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
}

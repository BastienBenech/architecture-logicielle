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
        this.roverHtml!.style.transform = "rotate(-90deg)";
        break;
      case "E":
        this.roverHtml!.style.transform = "rotate(0deg)";
        break;
      case "S":
        this.roverHtml!.style.transform = "rotate(90deg)";
        break;
      case "W":
        this.roverHtml!.style.transform = "rotate(180deg)";
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
    this.rotateRover();
  }

  private setRoverPosition(): void {
    document
      .querySelector(
        `#row_${this.rover.getPosition().y}-col_${this.rover.getPosition().x}`
      )
      ?.appendChild(this.roverHtml!);
  }

  public printRover(): void {
    if (this.roverHtml !== null) {
      this.roverHtml.remove();
    }
    this.buildRoverHtml();
    this.rotateRover();
    this.setRoverPosition();
  }

  private buildGridRow(): void {
    for (
      let rowIndex = -1;
      rowIndex < this.rover.getPlanete().getSize();
      rowIndex++
    ) {
      const row = document.createElement("div");
      row.setAttribute("id", `row_${rowIndex.toString()}`);
      row.setAttribute("class", "row");
      if (this.grid !== undefined) {
        this.grid!.innerHTML += row.outerHTML;
      }

      const currentRow = document.querySelector<HTMLDivElement>(
        `#row_${rowIndex.toString()}`
      );
      this.buildGridCell(currentRow, rowIndex);
    }
  }

  private buildGridCell(
    currentRow: HTMLDivElement | null,
    rowIndex: number
  ): void {
    if (currentRow !== undefined) {
      for (let j = 0; j < this.rover.getPlanete().getSize(); j++) {
        if (j === 0 && rowIndex !== -1) {
          this.buildGridRowIndex(currentRow, rowIndex);
        }
        if (rowIndex === -1) {
          this.buildGridColIndex(currentRow, j);
        } else {
          var cell = document.createElement("div");
          cell.setAttribute("id", `row_${rowIndex}-col_${j.toString()}`);
          cell.setAttribute("class", "cell");
          currentRow!.innerHTML += cell.outerHTML;
        }
      }
    }
  }

  private buildGridRowIndex(
    currentRow: HTMLDivElement | null,
    rowIndex: number
  ): void {
    const rowIndexCell = document.createElement("div");
    rowIndexCell.setAttribute("id", `row_${rowIndex}_index`);
    rowIndexCell.setAttribute("class", "row-index");
    rowIndexCell!.innerText = rowIndex.toString();
    if (currentRow !== undefined) {
      currentRow!.innerHTML += rowIndexCell.outerHTML;
    }
  }

  private buildGridColIndex(
    currentRow: HTMLDivElement | null,
    colIndex: number
  ): void {
    const colIndexCell = document.createElement("div");
    colIndexCell.setAttribute("id", `col_${colIndex}_index`);
    colIndexCell.setAttribute("class", "col-index");
    colIndexCell!.innerText = colIndex.toString();
    currentRow!.innerHTML += colIndexCell.outerHTML;
  }

  public printGrid(): void {
    this.buildGridRow();
  }
}

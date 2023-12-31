import "../style.css";

export class Playground {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  printRover(x: number, y: number): void {
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
    document.querySelector(`#row_${y}-col_${x}`)?.appendChild(newRover);
  }

  printGrid(): void {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML += `
    `;
    const grid = document.querySelector<HTMLDivElement>("#grid");
    for (let i = -1; i < this.height; i++) {
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
        for (let j = 0; j < this.width; j++) {
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

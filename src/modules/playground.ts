import "../style.css";

export class Playground {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  printRover(): void {
    const rover = document.createElement("img");
    rover.setAttribute("id", "rover");
    rover.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/1/1122.png"
    );
    document.querySelector("#row_0-col_0")?.appendChild(rover);
  }

  printGrid(): void {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML += `
    `;
    const grid = document.querySelector<HTMLDivElement>("#grid");
    for (let i = 0; i < this.height; i++) {
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
          var cell = document.createElement("div");
          cell.setAttribute("id", `row_${i}-col_${j.toString()}`);
          cell.setAttribute("class", "cell");
          selectedRow!.innerHTML += cell.outerHTML;
        }
      }
    }
  }
}

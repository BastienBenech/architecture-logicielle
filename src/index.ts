interface RoverState {
  x: number;
  y: number;
  direction: 'N' | 'E' | 'S' | 'W';
}

interface Planet {
  moveForward(): RoverState;
  moveBackward(): RoverState;
  turnLeft(): RoverState;
  turnRight(): RoverState;
  getPosition(): RoverState;
}

class ToroPlanet implements Planet {
  static MAP_SIZE = 10; // Réduit la taille de la carte pour une meilleure visualisation

  private x: number;
  private y: number;
  private direction: 'N' | 'E' | 'S' | 'W';

  constructor(x: number, y: number, direction: 'N' | 'E' | 'S' | 'W') {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  moveForward(): RoverState {
    switch (this.direction) {
      case 'N':
        this.y = (this.y - 1 + ToroPlanet.MAP_SIZE) % ToroPlanet.MAP_SIZE;
        break;
      case 'E':
        this.x = (this.x + 1) % ToroPlanet.MAP_SIZE;
        break;
      case 'S':
        this.y = (this.y + 1) % ToroPlanet.MAP_SIZE;
        break;
      case 'W':
        this.x = (this.x - 1 + ToroPlanet.MAP_SIZE) % ToroPlanet.MAP_SIZE;
        break;
    }

    return this.getPosition();
  }

  moveBackward(): RoverState {
    switch (this.direction) {
      case 'N':
        this.y = (this.y + 1) % ToroPlanet.MAP_SIZE;
        break;
      case 'E':
        this.x = (this.x - 1 + ToroPlanet.MAP_SIZE) % ToroPlanet.MAP_SIZE;
        break;
      case 'S':
        this.y = (this.y - 1 + ToroPlanet.MAP_SIZE) % ToroPlanet.MAP_SIZE;
        break;
      case 'W':
        this.x = (this.x + 1) % ToroPlanet.MAP_SIZE;
        break;
    }

    return this.getPosition();
  }

  turnLeft(): RoverState {
    switch (this.direction) {
      case 'N':
        this.direction = 'W';
        break;
      case 'E':
        this.direction = 'N';
        break;
      case 'S':
        this.direction = 'E';
        break;
      case 'W':
        this.direction = 'S';
        break;
    }

    return this.getPosition();
  }

  turnRight(): RoverState {
    switch (this.direction) {
      case 'N':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'S';
        break;
      case 'S':
        this.direction = 'W';
        break;
      case 'W':
        this.direction = 'N';
        break;
    }

    return this.getPosition();
  }

  getPosition(): RoverState {
    return { x: this.x, y: this.y, direction: this.direction };
  }
}

class RoverComponent {
  private rover: Planet;

  constructor() {
    this.rover = new ToroPlanet(5, 5, 'N');
  }

  private createGrid() {
    const gridContainer = document.getElementById('grid');
    if (gridContainer) {
      gridContainer.style.gridTemplateColumns = `repeat(${ToroPlanet.MAP_SIZE}, 1fr)`;
      for (let row = 0; row < ToroPlanet.MAP_SIZE; row++) {
        for (let col = 0; col < ToroPlanet.MAP_SIZE; col++) {
          const cell = document.createElement('div');
          cell.className = 'cell';
          gridContainer.appendChild(cell);
        }
      }
    }
  }

  private updateRoverPosition() {
    const gridContainer = document.getElementById('grid');
    if (gridContainer) {
      // Réinitialise la classe 'rover' pour toutes les cellules
      const cells = gridContainer.getElementsByClassName('cell');
      for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('rover', 'north', 'east', 'south', 'west');
      }

      // Ajoute la classe 'rover' à la cellule correspondant à la position du rover
      const position = this.rover.getPosition();
      const roverCell = gridContainer.children[position.y * ToroPlanet.MAP_SIZE + position.x];
      roverCell.classList.add('rover', position.direction.toLowerCase());
    }
  }

  private updatePositionDisplay() {
    const positionDisplay = document.getElementById('position-display');
    if (positionDisplay) {
      const position = this.rover.getPosition();
      positionDisplay.innerHTML = `Position: x=${position.x}, y=${position.y}, direction=${position.direction}`;
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.rover.moveForward();
        break;
      case 'ArrowDown':
        this.rover.moveBackward();
        break;
      case 'ArrowLeft':
        this.rover.turnLeft();
        break;
      case 'ArrowRight':
        this.rover.turnRight();
        break;
      default:
        // Ignore les autres touches
        break;
    }

    this.updateRoverPosition();
    this.updatePositionDisplay();
  }

  public init() {
    this.createGrid();

    document.addEventListener('keydown', (event) => this.handleKeyDown(event));

    const appContainer = document.getElementById('app');
    if (appContainer) {
      const positionDisplay = document.createElement('div');
      positionDisplay.id = 'position-display';
      appContainer.appendChild(positionDisplay);
    }

    this.updateRoverPosition();
    this.updatePositionDisplay();
  }
}

const roverApp = new RoverComponent();
roverApp.init();

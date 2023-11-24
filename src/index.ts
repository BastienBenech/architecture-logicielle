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
  static MAP_SIZE = 10;

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

// Exemple d'utilisation
const rover: Planet = new ToroPlanet(10, 10, 'N');

// Ajoutez un écouteur d'événements pour les touches du clavier
window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowUp':
      console.log(rover.moveForward());
      break;
    case 'ArrowDown':
      console.log(rover.moveBackward());
      break;
    case 'ArrowLeft':
      console.log(rover.turnLeft());
      break;
    case 'ArrowRight':
      console.log(rover.turnRight());
      break;
    default:
      // Ignore les autres touches
      break;
  }
}

console.log(rover.moveForward()); // Output: { x: 10, y: 9, direction: 'N' }
console.log(rover.turnRight());   // Output: { x: 10, y: 9, direction: 'E' }
console.log(rover.moveForward()); // Output: { x: 11, y: 9, direction: 'E' }
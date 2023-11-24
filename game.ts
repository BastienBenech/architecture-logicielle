import * as readlineSync from 'readline-sync';

class MarsRover {
  private x: number;
  private y: number;
  private orientation: string;

  constructor(x: number, y: number, orientation: string) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  private moveForward(): void {
    switch (this.orientation) {
      case 'N':
        this.y = (this.y + 1) % Mars.MAX_Y;
        break;
      case 'S':
        this.y = (this.y - 1 + Mars.MAX_Y) % Mars.MAX_Y;
        break;
      case 'E':
        this.x = (this.x + 1) % Mars.MAX_X;
        break;
      case 'W':
        this.x = (this.x - 1 + Mars.MAX_X) % Mars.MAX_X;
        break;
    }
  }

  private moveBackward(): void {
    switch (this.orientation) {
      case 'N':
        this.y = (this.y - 1 + Mars.MAX_Y) % Mars.MAX_Y;
        break;
      case 'S':
        this.y = (this.y + 1) % Mars.MAX_Y;
        break;
      case 'E':
        this.x = (this.x - 1 + Mars.MAX_X) % Mars.MAX_X;
        break;
      case 'W':
        this.x = (this.x + 1) % Mars.MAX_X;
        break;
    }
  }

  private turnRight(): void {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'E';
        break;
      case 'S':
        this.orientation = 'W';
        break;
      case 'E':
        this.orientation = 'S';
        break;
      case 'W':
        this.orientation = 'N';
        break;
    }
  }

  private turnLeft(): void {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'W';
        break;
      case 'S':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'N';
        break;
      case 'W':
        this.orientation = 'S';
        break;
    }
  }

  public executeCommand(command: string): void {
    switch (command) {
       case 'ArrowUp':
        this.moveForward();
        break;
      case 'ArrowDown':
        this.moveBackward();
        break;
      case 'ArrowRight':
        this.turnRight();
        break;
      case 'ArrowLeft':
        this.turnLeft();
        break;
    }
    
  }

  public getState(): string {
    return `(${this.x}, ${this.y}), Orientation: ${this.orientation}`;
  }
  }

  class Mars {
  static MAX_X: number = 10 ;
  static MAX_Y: number = 10;

  static runGameWithKeyboardControl(startX: number, startY: number, startOrientation: string): void {
    const rover = new MarsRover(startX, startY, startOrientation);

    console.log('Etat initial:', rover.getState());

    while (true) {
      const key = readlineSync.keyIn('Appuyez sur une touche (Q pour quitter): ', { limit: ['Q', 'up', 'down', 'right', 'left'] });

      if (key === 'Q') {
        break;
      }

      rover.executeCommand(key);
      console.log('Après', key, 'Command:', rover.getState());
    }
  }
}

const startX = 5;
const startY = 5;
const startOrientation = 'N';

Mars.runGameWithKeyboardControl(startX, startY, startOrientation);

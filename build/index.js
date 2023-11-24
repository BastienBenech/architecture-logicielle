var ToroPlanet = /** @class */ (function () {
    function ToroPlanet(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    ToroPlanet.prototype.moveForward = function () {
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
    };
    ToroPlanet.prototype.moveBackward = function () {
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
    };
    ToroPlanet.prototype.turnLeft = function () {
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
    };
    ToroPlanet.prototype.turnRight = function () {
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
    };
    ToroPlanet.prototype.getPosition = function () {
        return { x: this.x, y: this.y, direction: this.direction };
    };
    ToroPlanet.MAP_SIZE = 10;
    return ToroPlanet;
}());
// Exemple d'utilisation
var rover = new ToroPlanet(10, 10, 'N');
// Ajoutez un écouteur d'événements pour les touches du clavier
window.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event) {
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
console.log(rover.turnRight()); // Output: { x: 10, y: 9, direction: 'E' }
console.log(rover.moveForward()); // Output: { x: 11, y: 9, direction: 'E' }

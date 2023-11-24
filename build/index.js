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
    ToroPlanet.MAP_SIZE = 10; // Réduit la taille de la carte pour une meilleure visualisation
    return ToroPlanet;
}());
var RoverComponent = /** @class */ (function () {
    function RoverComponent() {
        this.rover = new ToroPlanet(5, 5, 'N');
    }
    RoverComponent.prototype.createGrid = function () {
        var gridContainer = document.getElementById('grid');
        if (gridContainer) {
            gridContainer.style.gridTemplateColumns = "repeat(".concat(ToroPlanet.MAP_SIZE, ", 1fr)");
            for (var row = 0; row < ToroPlanet.MAP_SIZE; row++) {
                for (var col = 0; col < ToroPlanet.MAP_SIZE; col++) {
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    gridContainer.appendChild(cell);
                }
            }
        }
    };
    RoverComponent.prototype.updateRoverPosition = function () {
        var gridContainer = document.getElementById('grid');
        if (gridContainer) {
            // Réinitialise la classe 'rover' pour toutes les cellules
            var cells = gridContainer.getElementsByClassName('cell');
            for (var i = 0; i < cells.length; i++) {
                cells[i].classList.remove('rover', 'north', 'east', 'south', 'west');
            }
            // Ajoute la classe 'rover' à la cellule correspondant à la position du rover
            var position = this.rover.getPosition();
            var roverCell = gridContainer.children[position.y * ToroPlanet.MAP_SIZE + position.x];
            roverCell.classList.add('rover', position.direction.toLowerCase());
        }
    };
    RoverComponent.prototype.updatePositionDisplay = function () {
        var positionDisplay = document.getElementById('position-display');
        if (positionDisplay) {
            var position = this.rover.getPosition();
            positionDisplay.innerHTML = "Position: x=".concat(position.x, ", y=").concat(position.y, ", direction=").concat(position.direction);
        }
    };
    RoverComponent.prototype.handleKeyDown = function (event) {
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
    };
    RoverComponent.prototype.init = function () {
        var _this = this;
        this.createGrid();
        document.addEventListener('keydown', function (event) { return _this.handleKeyDown(event); });
        var appContainer = document.getElementById('app');
        if (appContainer) {
            var positionDisplay = document.createElement('div');
            positionDisplay.id = 'position-display';
            appContainer.appendChild(positionDisplay);
        }
        this.updateRoverPosition();
        this.updatePositionDisplay();
    };
    return RoverComponent;
}());
var roverApp = new RoverComponent();
roverApp.init();

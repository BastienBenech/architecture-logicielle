import {Rover} from '../src/classes/Rover';
import {Planete} from "../src/classes/Planete";
import {Position} from "../src/classes/Position";
import {DirectionEnum} from "../src/enums/DirectionEnum";

describe('Un Rover sort d\'un côté de la map et revient du côté opposé', () => {
  test('ETANT DONNE un Rover (orienté Nord) sort au Nord en position (5,0) sur une map de (9,9) ' +
    'QUAND on le fait avancer ' +
    'ALORS il se déplace a la position (5,9) en gardant son orientation vers le Nord', () => {
    let position = new Position(5,0, DirectionEnum.NORD);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.moveForward();

    expect(rover.getPosition().x).toBe(5);
    expect(rover.getPosition().y).toBe(9);
    expect(rover.getPosition().direction).toBe("N");
  });

  test('ETANT DONNE un Rover (orienté Est) sort à l\'Est en position (9,5) sur une map de (9,9) ' +
    'QUAND on le fait avancer ' +
    'ALORS il se déplace a la position (0,5) en gardant son orientation vers l\'Est', () => {
    let position = new Position(9,5, DirectionEnum.EST);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.moveForward();

    expect(rover.getPosition().x).toBe(0);
    expect(rover.getPosition().y).toBe(5);
    expect(rover.getPosition().direction).toBe("E");
  });

  test('ETANT DONNE un Rover (orienté Sud) sort au Sud en position (5,9) sur une map de (9,9) ' +
    'QUAND on le fait avancer ' +
    'ALORS il se déplace a la position (5,0) en gardant son orientation vers le Sud', () => {
    let position = new Position(5,9, DirectionEnum.SUD);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.moveForward();

    expect(rover.getPosition().x).toBe(5);
    expect(rover.getPosition().y).toBe(0);
    expect(rover.getPosition().direction).toBe("S");
  });

  test('ETANT DONNE un Rover (orienté Ouest) sort à l\'Ouest en position (0,5) sur une map de (9,9) ' +
    'QUAND on le fait avancer ' +
    'ALORS il se déplace a la position (9,5) en gardant son orientation vers l\'Ouest', () => {
    let position = new Position(0,5, DirectionEnum.OUEST);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.moveForward();

    expect(rover.getPosition().x).toBe(9);
    expect(rover.getPosition().y).toBe(5);
    expect(rover.getPosition().direction).toBe("W");
  });
});
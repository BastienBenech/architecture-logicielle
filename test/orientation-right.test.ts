import {Rover} from '../src/classes/Rover';
import {Planete} from "../src/classes/Planete";
import {Position} from "../src/classes/Position";
import {DirectionEnum} from "../src/enums/DirectionEnum";

describe('Un Rover peut tourner à droite', () => {
  test('ETANT DONNE un Rover orienté Nord à la position (5,5)' +
    'QUAND on le fait tourner à droite ' +
    'ALORS il s\'oriente vers l\'Est et garde les même coordonnées', () => {
    let position = new Position(5,5, DirectionEnum.NORD);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.checkInputKey("ArrowRight");

    expect(rover.getPosition().direction).toBe("E");
    expect(rover.getPosition().x).toBe(5);
    expect(rover.getPosition().y).toBe(5);
  });

  test('ETANT DONNE un Rover orienté Est à la position (5,5) ' +
    'QUAND on le fait tourner à droite ' +
    'ALORS il s\'oriente vers le Sud et garde les même coordonnées', () => {
    let position = new Position(5,5, DirectionEnum.EST);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.checkInputKey("ArrowRight");

    expect(rover.getPosition().direction).toBe("S");
    expect(rover.getPosition().x).toBe(5);
    expect(rover.getPosition().y).toBe(5);
  });

  test('ETANT DONNE un Rover orienté Sud à la position (5,5) ' +
    'QUAND on le fait tourner à droite ' +
    'ALORS il s\'oriente vers l\'Ouest et garde les même coordonnées', () => {
    let position = new Position(5,5, DirectionEnum.SUD);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.checkInputKey("ArrowRight");

    expect(rover.getPosition().direction).toBe("W");
    expect(rover.getPosition().x).toBe(5);
    expect(rover.getPosition().y).toBe(5);
  });

  test('ETANT DONNE un Rover orienté Ouest à la position (5,5) ' +
    'QUAND on le fait tourner à droite ' +
    'ALORS il s\'oriente vers le Nord et garde les même coordonnées', () => {
    let position = new Position(5,5, DirectionEnum.OUEST);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.checkInputKey("ArrowRight");

    expect(rover.getPosition().direction).toBe("N");
    expect(rover.getPosition().x).toBe(5);
    expect(rover.getPosition().y).toBe(5);
  });
});
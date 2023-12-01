import {Rover} from '../src/classes/Rover';
import {Planete} from "../src/classes/Planete";
import {Position} from "../src/classes/Position";
import {DirectionEnum} from "../src/enums/DirectionEnum";

describe('Un Rover peut reculer', () => {
  test('ETANT DONNE un Rover orienté Nord aterrissant en (5, 5) ' +
    'QUAND on le fait reculer ' +
    'ALORS il passe en (5, 6) et garde son orientation Nord', () => {
    let position = new Position(5,5, DirectionEnum.NORD);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.moveBackward();

    expect(rover.getPosition().x).toBe(5);
    expect(rover.getPosition().y).toBe(6);
    expect(rover.getPosition().direction).toBe('N');
  });

  test('ETANT DONNE un Rover orienté Sud aterrissant en (5, 5) ' +
    'QUAND on le fait reculer ' +
    'ALORS il passe en (5, 4) et garde son orientation Sud', () => {
    let position = new Position(5,5, DirectionEnum.SUD);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.moveBackward();

    expect(rover.getPosition().x).toBe(5);
    expect(rover.getPosition().y).toBe(4);
    expect(rover.getPosition().direction).toBe('S');
  });

  test('ETANT DONNE un Rover orienté Est aterrissant en (5, 5) ' +
    'QUAND on le fait reculer ' +
    'ALORS il passe en (4, 5) et garde son orientation Est', () => {
    let position = new Position(5,5, DirectionEnum.EST);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.moveBackward();

    expect(rover.getPosition().x).toBe(4);
    expect(rover.getPosition().y).toBe(5);
    expect(rover.getPosition().direction).toBe('E');
  });

  test('ETANT DONNE un Rover orienté Ouest aterrissant en (5, 5) ' +
    'QUAND on le fait reculer ' +
    'ALORS il passe en (6, 5) et garde son orientation Ouest', () => {
    let position = new Position(5,5, DirectionEnum.OUEST);
    let planete = new Planete(10);
    let rover = new Rover(position, planete);

    rover.moveBackward();

    expect(rover.getPosition().x).toBe(6);
    expect(rover.getPosition().y).toBe(5);
    expect(rover.getPosition().direction).toBe('W');
  });
});
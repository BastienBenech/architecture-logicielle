import { DirectionEnum } from "./DirectionEnum.ts";

export const directionsForward = {
    'N': { x: 0, y: -1 },
    'E': { x: 1, y: 0 },
    'S': { x: 0, y: 1 },
    'W': { x: -1, y: 0 }
};

export const directionsBackward = {
    'N': { x: 0, y: 1 },
    'E': { x: -1, y: 0 },
    'S': { x: 0, y: -1 },
    'W': { x: 1, y: 0 }
};

export const directionsLeft = {
    'N': DirectionEnum.OUEST,
    'E': DirectionEnum.NORD,
    'S': DirectionEnum.EST,
    'W': DirectionEnum.SUD
};

export const directionsRight = {
    'N': DirectionEnum.EST,
    'E': DirectionEnum.SUD,
    'S': DirectionEnum.OUEST,
    'W': DirectionEnum.NORD
};
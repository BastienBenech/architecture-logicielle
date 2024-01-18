"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const MissionControllerSocketIO_1 = require("./classes/MissionControllerSocketIO");
const RoverInterpreteur_1 = require("./interpreteurs/RoverInterpreteur");
const serverRover_1 = require("./serverRover");
const socketClient = (0, socket_io_client_1.default)();
const roverInterpreteur = new RoverInterpreteur_1.RoverInterpreteur(serverRover_1.rover);
const missionController = new MissionControllerSocketIO_1.MissionControllerSocketIO(roverInterpreteur, socketClient);
missionController.envoyerCommandeAuRover("avancer");

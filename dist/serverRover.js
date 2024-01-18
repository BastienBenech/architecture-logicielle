"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rover = void 0;
const http = __importStar(require("http"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const Rover_1 = require("./classes/Rover");
const Position_1 = require("./classes/Position");
const Coordonates_1 = require("./classes/Coordonates");
const Direction_1 = require("./enums/Direction");
const Planete_1 = require("./classes/Planete");
const RoverInterpreteur_1 = require("./interpreteurs/RoverInterpreteur");
const MissionControllerSocketIO_1 = require("./classes/MissionControllerSocketIO");
const app = (0, express_1.default)();
const server = http.createServer(app);
const io = new socket_io_1.Server(server);
const position = new Position_1.Position(new Coordonates_1.Coordonates(0, 0), Direction_1.Direction.Nord);
const planete = new Planete_1.Planete(10, 10);
exports.rover = new Rover_1.Rover(position, planete);
io.on('connection', (socket) => {
    console.log('Le MissionController s\'est connecté');
    // Écoute des commandes envoyées par le MissionController
    socket.on('commande', (commande) => {
        console.log(`Commande reçue : ${commande}`);
        // Logique pour interpréter et exécuter la commande sur le Rover
    });
    // Écoute des mises à jour du Rover (coordonnées, état, etc.)
    // Émettre des événements lorsque des mises à jour surviennent sur le Rover
});
server.listen(3000, () => {
    console.log('Serveur Socket.IO du Rover écoutant sur le port 3000');
});
const socket_io_client_1 = require("socket.io-client");
const socketClient = (0, socket_io_client_1.io)();
const roverInterpreteur = new RoverInterpreteur_1.RoverInterpreteur(exports.rover);
const missionController = new MissionControllerSocketIO_1.MissionControllerSocketIO(roverInterpreteur, socketClient);
missionController.envoyerCommandeAuRover("avancer");

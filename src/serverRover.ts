import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { Rover } from "./classes/Rover";
import { RoverInterpreteur } from "./interpreteurs/RoverInterpreteur";
import { MissionController } from "./classes/MissionController";
import { RoverBuilder } from "./builder/RoverBuilder";
import { Direction } from "./enums/Direction";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
  console.log("Rover connecté !");

  socket.on("commande", (commande: string, rover: Rover) => {
    const newRover = new RoverBuilder()
      .withPosition(4, 4, Direction.Nord)
      .build();
    const roverInterpreteur = new RoverInterpreteur(newRover);
    const missionController = new MissionController(roverInterpreteur);

    console.log("Commande : " + commande);

    switch (commande) {
      case "z":
        missionController.envoyerCommandeAuRover("avancer");
        break;
      case "s":
        missionController.envoyerCommandeAuRover("reculer");
        break;
      case "q":
        missionController.envoyerCommandeAuRover("gauche");
        break;
      case "d":
        missionController.envoyerCommandeAuRover("droite");
        break;
      case "9":
        console.log("Le programme est terminé.");
        return; // Sortir de la boucle while
      default:
        console.log("Commande invalide. Veuillez réessayer.");
    }

    // Afficher l'état actuel du Rover
    console.log(
      `Position actuelle : ${newRover.getCoordonnees().x}, ${
        newRover.getCoordonnees().y
      }`
    );
    console.log(`Direction actuelle : ${newRover.getDirection()}`);
  });
});

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Le server du Rover écoute le port : ${PORT}`);
});

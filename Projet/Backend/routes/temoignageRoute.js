//Importer la fonction Router pour la creation des routes
import { Router } from "express";


//Importer les controllers
import { addTemoignage, deleteTemoignage, TemoignageList, TemoignageById, TemoignageUsers, updateTemoignage } from "../controllers/temoignageController.js";
import { verifierToken } from "../authentification/verifierToken.js";

// Creation d"une instance de Router
const temoignageRoute = Router()

temoignageRoute
    .all("*", verifierToken)
    .get('/', TemoignageList)
    .post('/', addTemoignage)
    .delete('/:id', deleteTemoignage)
    .put('/:id', updateTemoignage)
    .get('/:id', TemoignageById)
    .get('/:id/users', TemoignageUsers)

export default temoignageRoute
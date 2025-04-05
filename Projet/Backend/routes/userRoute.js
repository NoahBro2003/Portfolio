//Importer la fonction Router pour la creation des routes
import { Router } from "express";

//Importer les controllers
import { addUser, deleteUser, updateUser, userById, userList } from "../controllers/userController.js";

//Importer la fonction pour charger les images/fichiers
import upload from "../helpers/fileLoader.js";
import { verifierToken } from "../authentification/verifierToken.js";
import userRules from "../validations/userValidation.js";

// Creation d"une instance de Router
const route = Router()

route
    .post('/', userRules, addUser)
    //Proteger toutes les routes ci-dessous
    .all("*", verifierToken) 
    .put('/:id', userRules, updateUser)
    .get('/:id', userById)
    // .all("*",autoriser(["admin"])) 
    .get('/', userList)
    .delete('/:id', deleteUser)

export default route
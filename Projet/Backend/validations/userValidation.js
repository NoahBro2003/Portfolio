import { body, check, param } from "express-validator";

//Regex pour le nom et prenom
const nameRegex = /^[a-zA-Z]{4,}$/ // /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

const imageExt = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
//On peut aussi utiliser une regex pour le mot de passe
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const userRules = [
    body('nom').notEmpty().isAlpha().withMessage("le nom n'est pas conforme"),
    body('prenom').notEmpty().isAlpha().withMessage("le prenom n'est pas conforme"),
    body('email').notEmpty().isEmail().withMessage("ceci n'est pas un email"),
    body('mot_de_passe')
        .isLength({ min: 8 }).withMessage('au moins 8 caracteres')
        .matches(/\d/).withMessage('au moins un chiffre')
        .matches(/[a-z]/).withMessage('au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('au moins un caractere special'),
]

const updateUserRules = [
    body('nom').notEmpty().isAlpha().withMessage("le nom n'est pas conforme"),
    body('prenom').notEmpty().isAlpha().withMessage("le prenom n'est pas conforme"),
    body('email').notEmpty().isEmail().withMessage("ceci n'est pas un email"),
]

export {userRules, updateUserRules}
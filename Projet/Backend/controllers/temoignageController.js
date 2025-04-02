import { validationResult } from "express-validator";
import { Temoignage, User } from "../models/relation.js";

export const addTemoignage = async (req, res) => {

    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const temoignage = req.body
    try {
        const result = await Temoignage.create(temoignage)
        res.status(201).json({ message: "Temoignage cree", data: result })

    } catch (error) {
        res.status(200).json({ message: error.message })
    }

}

export const TemoignageList = async (req, res) => {
    try {
        const Temoignages = await Temoignage.findAll()
        res.status(200).json({ data: Temoignages })
    } catch (err) {
        res.status(200).json({ message: err.message })
    }
}

export const deleteTemoignage = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Temoignage.destroy({ where: { id } })
        res.status(200).json({ message: `Temoignage ${id} supprime`, data: result })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

}

export const TemoignageById = async (req, res) => {
    const { id } = req.params
    try {
        const temoignage = await Temoignage.findByPk(id, {
            include: {
                model: User,
                through: {
                    attributes: []
                }
            }
        })
        res.status(200).json({ data: temoignage })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Controllers lies aux relations

export const TemoignageUsers = async (req, res) => {
    const { id } = req.params
    try {
        const temoignage = await Temoignage.findByPk(id)
        const users = await temoignage.getUsers({
            attributes: {
                exclude: ["mot_de_passe"]
            },
        })
        res.status(200).json({ data: users })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}
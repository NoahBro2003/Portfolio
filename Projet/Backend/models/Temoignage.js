import database from "../config/connection.js";
import { DataTypes } from "sequelize";

const Temoignage = database.define('Temoignage', {
    titre: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT
},{timestamps:false}
)

export default Temoignage
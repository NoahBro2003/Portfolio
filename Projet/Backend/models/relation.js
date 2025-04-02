import User from "./User.js";
import Temoignage from "./Temoignage.js";


//Relations entre entites

Temoignage.belongsToMany(User, {
    through: 'temoignage_user'
})

User.belongsToMany(Temoignage, {
    through: 'temoignage_user'
})



export { User, Temoignage }
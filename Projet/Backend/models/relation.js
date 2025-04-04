import User from "./User.js";
import Temoignage from "./Temoignage.js";


//Relations entre entites

Temoignage.belongsTo(User)
User.hasMany(Temoignage)


export { User, Temoignage }
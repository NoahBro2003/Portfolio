import express from "express";
import cors from 'cors'
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";
import dotenv from 'dotenv'

import database from "./config/connection.js";
database.sync({ alter: true })
import temoignageRoute from "./routes/temoignageRoute.js";
import authRoute from "./routes/authRoute.js";
import route from "./routes/userRoute.js";


const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Les routes 
// app.get('/api/users',userList)
app.use('/api/users', route)
app.use('/api/temoignage', temoignageRoute)
app.use('/api/login', authRoute)

app.use('/public', express.static('public'))

const PORT = dotenv.config().parsed.PORT

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))
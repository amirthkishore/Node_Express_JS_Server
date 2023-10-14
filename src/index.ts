import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './router';

const app = express()
const PORT = process.env.PORT || 5100;
const MONGO_URL = "mongodb+srv://amirthkishore950058:amirthkishore950058@cluster0.zzspuau.mongodb.net/"

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`server is running on ${ PORT }`)
})

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on("error" , (error : Error) => console.log(error))

app.use('/', router());
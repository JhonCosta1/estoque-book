require('dotenv').config()
const express = require('express') //chama o pacote express
const mongoose = require('mongoose')
const app = express() //chama pacote express como função
const dbuser = process.env.DB_USER
const dbpassword = process.env.DB_PASSWORD
const dbhost = process.env.DB_HOST

// configurar JSON e Middle
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas
const user_routes = require('../routes/user_routes')

app.use('/usuario', user_routes)

app.get('/', user_routes)

mongoose.connect(`mongodb+srv://${dbuser}:${dbpassword}@cluster0.tvvajsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(`${dbhost}`)
    })
    .catch()
//porta de acesso

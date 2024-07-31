const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    nome: String,
    password: String,
    email: String,

}) 


module.exports = Person
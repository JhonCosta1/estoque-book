const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true }
});

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    produtos: [ProdutoSchema]
});

const Usuario = mongoose.model('Usuario', UsuarioSchema)


module.exports = Usuario
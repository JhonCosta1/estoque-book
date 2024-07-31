const router = require('express').Router()
const Usuario = require('../models/person')


// criar
router.post('/', async (req, res) => {
    const { nome, password, email } = req.body;

    // Validação dos campos obrigatórios
    if (!nome) {
        return res.status(422).json({ error: 'Nome é obrigatório' });
    }
    if (!password) {
        return res.status(422).json({ error: 'Senha é obrigatória' });
    }
    if (!email) {
        return res.status(422).json({ error: 'Email é obrigatório' });
    }

    try {
        // Verificação se o nome já existe
        const valida_nome = await Usuario.findOne({ nome: nome });

        if (valida_nome) {
            return res.status(409).json({ error: 'Nome já cadastrado' });
        }

        const valida_email = await Usuario.findOne({ email: email });
        if (valida_email) {
            return res.status(409).json({ error: 'Email já cadastrado' });
        }

        const usuario = {
            nome,
            password,
            email,
        }


        // Criação do usuário
        await Usuario.create(usuario)
        res.status(201).json({ message: 'Usuário cadastrado com sucesso.' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao verificar ou criar usuário' })
    }
})


router.get('/', async (req, res) => {

    try {
        const usuarios_total = await Usuario.find()
        res.status(200).json(usuarios_total)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

module.exports = router
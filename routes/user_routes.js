const router = require('express').Router()
const Usuario = require('../models/person')


// criar
router.post('/', async (req, res) => {
    const { nome, password, email, produtos } = req.body

    // Validação dos campos obrigatórios
    if (!nome) {
        return res.status(422).json({ error: 'Nome é obrigatório' })
    }
    if (!password) {
        return res.status(422).json({ error: 'Senha é obrigatória' })
    }
    if (!email) {
        return res.status(422).json({ error: 'Email é obrigatório' })
    }

    try {
        // Verificação se o nome já existe
        const valida_nome = await Usuario.findOne({ nome: nome })

        if (valida_nome) {
            return res.status(409).json({ error: 'Nome já cadastrado' })
        }

        const valida_email = await Usuario.findOne({ email: email })
        if (valida_email) {
            return res.status(409).json({ error: 'Email já cadastrado' })
        }

        const usuario = {
            nome,
            password,
            email,
            produtos: produtos || []
        }


        // Criação do usuário
        await Usuario.create(usuario)
        res.status(201).json({ message: 'Cadastro efetuado com sucesso' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao verificar ou criar usuário' })
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { password } = req.body
    
    // Validações
    if (!password) {
        return res.status(422).json({ error: 'Senha é obrigatória' })
    }

    try {
        // Atualizar o usuário com a nova senha
        const usuario = await Usuario.updateOne({ _id: id }, { password })

        res.status(200).json({ message: 'Senha atualizada com sucesso' })
    } catch (error) {
        res.status(500).json({ error: 'E-mail incorreto ou não existe' })
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

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        const usuario = await Usuario.findOne({_id: id})
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({error: error})
    }

})


module.exports = router
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const usuario = {
            nome,
            password: passwordHash,
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
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
        const usuario = await Usuario.updateOne({ _id: id }, { password: passwordHash })

        res.status(200).json({ message: 'Senha atualizada com sucesso' })
    } catch (error) {
        res.status(500).json({ error: 'E-mail incorreto ou não existe' })
    }
})


router.get('/valida/:id', valida_token, async (req, res) => {

    const id = req.params.id

    const usuario = await Usuario.findById(id, '-password')

    if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    res.status(200).json({ usuario })

})

function valida_token(req, res, next){
    const auth_head = req.headers['authorization']
    const token = auth_head && auth_head.split(" ")[1]

    if (!token) {
        alert('Acesso negado')
        window.location.href = '/public/index.html'
        return res.status(401).json({ message: 'Acesso negado' })
    }


    try {
        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()

    } catch (error) {
        window.location.href = '/public/index.html'
        return res.status(400).json({ message: 'Token invalido'})
    }
}


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


router.post('/auth/login', async (req, res) => {
    const {nome, password} = req.body

    if (!password) {
        return res.status(422).json({ error: 'Senha é obrigatória' })
    }
    if (!nome) {
        return res.status(422).json({ error: 'Usuário é obrigatório' })
    }

    const valida_nome = await Usuario.findOne({ nome: nome })


    if (!valida_nome) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    const valida_password = await bcrypt.compare(password, valida_nome.password)

    if (!valida_password) {
        return res.status(422).json({ message: 'Senha inválida'})
    }

    try {
        const secret = process.env.SECRET

        const token = jwt.sign(
            {
                id: valida_nome._id,
            },
            secret,
        )

        res.cookie('token', token, {
            httpOnly: true,
            secure: true, 
            sameSite: 'Strict',
        })

        res.status(200).json({message: 'usuário autenticado', token})

    } catch (error) {
        res.status(500).json({ message: 'erro ao logar'})
    }

})


module.exports = router
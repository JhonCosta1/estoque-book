const router = require('express').Router()
const Usuario = require('../models/person')


// criar
router.post('/', async (req, res) => {
    const { nome, password, email, produtos } = req.body;

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
            produtos: produtos || []
        }


        // Criação do usuário
        await Usuario.create(usuario)
        res.status(201).json({ message: 'Cadastro efetuado com sucesso.' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao verificar ou criar usuário' })
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { nome, password, email, produtos } = req.body;

    /* Validação dos produtos
    if (!Array.isArray(produtos) || produtos.length === 0) {
        return res.status(422).json({ error: 'Produtos devem ser um array não vazio' });
    } */

    const usuario = {
        nome,
        password,
        email,
        produtos: produtos || []
    }

    try {
        // Encontrar o usuário pelo ID
        const usuarioAtt = await Usuario.updateOne({_id: id}, usuario);
        
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Adicionar os novos produtos ao array existente
        //usuario.produtos = usuario.produtos.concat(produtos);

        // Salvar as mudanças
        //await usuario.save();

        res.status(200).json({ message: 'Produtos adicionados com sucesso', usuario });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar produtos' });
    }
});


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
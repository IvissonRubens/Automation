import express from 'express'
import cors from 'cors'
import { getUsers, getUserID, getUserEmail, createUser } from './database.js'

const app = express()

// Configuração do CORS
app.use(cors({ origin: 'http://localhost:8080' })) 

// Middleware para processar JSON
app.use(express.json())

// Rota para pegar todos os usuários
app.get("/users", async (req, res) => {
    try {
        const users = await getUsers()
        res.send(users)
    } catch (err) {
        res.status(500).send({ error: "Erro ao buscar usuários" })
    }
})

// Rota para pegar um usuário pelo ID
app.get("/users/:ID", async (req, res) => {
    const ID = req.params.ID
    try {
        const user = await getUserID(ID)
        if (!user) {
            return res.status(404).send({ error: "Usuário não encontrado" })
        }
        res.send(user)
    } catch (err) {
        res.status(500).send({ error: "Erro ao buscar usuário" })
    }
})

// Rota para pegar um usuário pelo e-mail
app.get("/users/:email", async (req, res) => {
    const email = req.params.email
    try {
        const user = await getUserEmail(email)
        if (!user) {
            return res.status(404).send({ error: "Usuário não encontrado" })
        }
        res.send(user)
    } catch (err) {
        res.status(500).send({ error: "Erro ao buscar usuário" })
    }
})

// Rota para criar um novo usuário
app.post("/users", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await createUser(email, password)
        res.status(201).send(user)
    } catch (err) {
        res.status(500).send({ error: "Erro ao criar usuário" })
    }
})

// Rota de erro geral
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo deu errado!')
})

// Iniciar o servidor na porta 8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})

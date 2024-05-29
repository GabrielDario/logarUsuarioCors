import jwt from 'jsonwebtoken'
import { Usuario } from '../Model/Usuario.js'

const segredo = process.env.SECRET

const login = async (req, res) => {
    const { email, senha } = req.body
    console.log(`${email} e ${senha}`)
    if (email && senha) {
        const login = await Usuario.findOne({ where: { email } })
        if (login && login?.senha == senha) {
            res.status(201).send({ mensagem: "login realizado" })
        } else {
            res.status(400).send({ mensagem: "Usuário Incorreto" })
        }
    } else {
        res.status(400).send({ mensagme: 'Favor informar email e e senha' })
    }

}

export { login }
import jwt from 'jsonwebtoken'
import { Usuario } from '../Model/Usuario.js'

const segredo = process.env.SECRET

const login = async (req, res) => {
    const { email, senha } = req.body
    if (email && senha) {
        const login = await Usuario.findOne({ where: { email } })
        if (login && login?.senha == senha) {
            const token = jwt.sign({id : login.id}, segredo, {expiresIn: "1d"})
            
            res.status(201).send({ mensagem: `login realizado`, token })
        } else {
            res.status(400).send({ mensagem: "Usuário Incorreto" })
        }
    } else {
        res.status(400).send({ mensagme: 'Favor informar email e e senha' })
    }

}

export { login }
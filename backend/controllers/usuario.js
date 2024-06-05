import { Usuario } from '../Model/Usuario.js'
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET

const cadUsuario = async ( req,res) => {
    console.log('Casdastro')
    const { nome, senha , email} = req.body
    if (nome && senha && email) {
        const usuario = await Usuario.create({ nome, senha  , email})
        res.status(201).send({ cadastrado : usuario })
    } else {
        res.status(400).send({ message: "Favor informar nome, senha ou senha" })
    }
}

export { cadUsuario }
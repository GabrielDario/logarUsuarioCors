import jwt from 'jsonwebtoken'
const segredo = process.env.SECRET

const validarToken = (req, res, next) => {
    try {
        const token = req.headers?.authorization
        const infToken = jwt.verify(token, segredo)
        console.log(`INFORMAÇÃO DO TOKEN: ${JSON.stringify(infToken)}`)
        req.nivelPermisao = infToken
        next()

    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'OCCORREU UM ERRO VALIDAR TOKEN' })
    }
}

export { validarToken }
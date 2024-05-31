import { Tarefa } from '../Model/Tarefa.js'
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET

const cadTarefa = async (req, res) => {
    const { descricao, idUsuario, completed = false } = req.body
    if (descricao && idUsuario) {
        const tarefa = await Tarefa.create({ descricao, idUsuario, completed })
        res.status(201).send({ cadastrado: tarefa })
    } else {
        res.status(400).send({ message: "Favor informar descricao e idTarefa" })
    }
}

const getTarefas = async (req, res) => {
    try {
        const tarefa = await Tarefa.findAll()
        res.status(201).send({ tarefas: tarefa })
    } catch (erro) {
        res.status(400).send({ message: "Erro ao listar" })
    }
}
const updateTarefas = async (req, res) => {
    const { id } = req.params
    const { descricao, idTarefa, completed } = req.body
    try {
        if (descricao && idTarefa && completed) {
            const tarefa = await Tarefa.update({ descricao, idTarefa, completed }, { where: { id } })
            const tarefas = await Tarefa.findAll()
            res.status(201).send({ Atualizado: tarefas })
        } else {
            res.status(400).send({ MENSAGEM: 'ERRO AO ATUALIADO' })
        }
    } catch (erro) {
        res.status(400).send({ message: "Erro ao listar" })
    }
}

const deletar = async (req, res) => {
    try {
        const { id } = req.params
        const tarefa = await Tarefa.destroy({ where : {id }})
        res.status(200).send({ MENSAGEM : "Tarefa apagada" })
    } catch (erro) {
        res.status(400).send({ message: "Erro ao apagar" })
    }
}
export { cadTarefa, getTarefas, updateTarefas , deletar}
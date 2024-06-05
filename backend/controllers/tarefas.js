import { Tarefa } from '../Model/Tarefa.js'

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
        let idUsuario = req.idUsuario
        const tarefa = await Tarefa.findAll({ where : { idUsuario }})
        res.status(201).send({ tarefas: tarefa })
    } catch (erro) {
        res.status(400).send({ message: "Erro ao listar" })
    }
}
const updateTarefas = async (req, res) => {
    try {
        const { id } = req.params
        const { completed =  true } = req.body
        let idUsuario = req.idUsuario
        const tarefa = await Tarefa.findOne({ where: { id } })
        const tarefaId = tarefa.idUsuario
        if (idUsuario == tarefaId) {
            const tarefaAtualizado = await Tarefa.update({ completed }, { where: { id } })
            res.status(201).send({ Atualizado: tarefaAtualizado })
        } else {
            res.status(400).send({ MENSAGEM: 'NÃO AUTORIZADO' })
        }
    } catch (erro) {
        res.status(400).send({ message: "Erro ao listar" })
    }
}

const deletar = async (req, res) => {
    try {
        const { id } = req.params
        let idUsuario = req.idUsuario

        const tarefa = await Tarefa.findOne({ where: { id } })
        const tarefaId = tarefa.idUsuario
        if (idUsuario == tarefaId) {
            const tarefaDeletada = await Tarefa.destroy({ where: { id } })
            res.status(201).send({ Deletado: tarefaDeletada })
        } else {
            res.status(400).send({ MENSAGEM: 'NÃO AUTORIZADO' })
        }
    } catch (erro) {
        res.status(400).send({ message: "Erro ao apagar" })
    }
}
export { cadTarefa, getTarefas, updateTarefas , deletar}
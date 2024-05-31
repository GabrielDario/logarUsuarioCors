import express from 'express'
import { login } from '../controllers/autentificacao.js'
import { validarToken } from '../middlewares/validacao.js'
import { cadUsuario } from '../controllers/usuario.js'
import { cadTarefa,getTarefas ,updateTarefas,deletar} from '../controllers/tarefas.js'
const router = express.Router()

router.post('/cadUsuario' , cadUsuario)
router.post('/cadTarefa' , cadTarefa)
router.get('/tarefas' , getTarefas)
router.put('/tarefas/:id' , updateTarefas)
router.delete('/tarefas/:id' , deletar)


router.post('/login', validarToken, login)

export default router

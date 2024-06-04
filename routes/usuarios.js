import express from 'express'
import { login } from '../controllers/autentificacao.js'
import { validarToken } from '../middlewares/validacao.js'
import { cadUsuario } from '../controllers/usuario.js'
import { cadTarefa,getTarefas ,updateTarefas,deletar} from '../controllers/tarefas.js'
const router = express.Router()

router.post('/cadastro', cadUsuario)
router.post('/tarefas' ,validarToken,  cadTarefa)
router.get('/tarefas' ,validarToken ,  getTarefas)
router.put('/tarefas/:id' , validarToken , updateTarefas)
router.delete('/tarefa/:id' , validarToken , deletar)


router.post('/login', login)

export default router

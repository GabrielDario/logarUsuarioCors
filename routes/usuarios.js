import express from 'express'
import { login } from '../controllers/autentificacao.js'
import { validarToken } from '../middlewares/validacao.js'
import { cadastro } from '../controllers/usuario.js'
import { tarefas,getTarefas ,updateTarefas,deletar} from '../controllers/tarefas.js'
const router = express.Router()

router.post('/cadastro' , cadastro)
router.post('/tarefas' , tarefas)
router.get('/tarefas' , getTarefas)
router.put('/tarefas/:id' , updateTarefas)
router.delete('/tarefas/:id' , deletar)


router.post('/login', validarToken, login)

export default router

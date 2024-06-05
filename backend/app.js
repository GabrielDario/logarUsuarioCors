import express from "express"
import cors from "cors"
import 'dotenv/config'
import sequelize from "./database.js"
import rotas from "./routes/usuarios.js"
const app = express()

app.use(express.json())
app.use(cors())
app.use(rotas)
try {
    await sequelize.sync({});
    console.log('Conectado com Sucesso!')
}catch(error) {
    console.log("Erro ao conectar",  error)
}
app.listen( 3000, () => console.log('servidor rodando'))
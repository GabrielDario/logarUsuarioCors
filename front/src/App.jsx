import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [tarefas, setTarefas] = useState([])

  const enviar = async () => {
    try {
      const body = {
        senha, email
      }
      const resultado = await axios.post(`http://localhost:3000/login`, body)
      localStorage.setItem('token', resultado.data.token)
      alert('login realizado')
    } catch (erro) {
      alert('login invalido')
    }
  }
  const cadastrar = async () => {
    try {
      // if(senha.lenght > 6 && email.lenght > 6 && nome.lenght > 6){

      // }
      const body = {
        senha, email, nome
      }
      const resultado = await axios.post(`http://localhost:3000/cadastro`, body)
      alert('cadastro realizado')
    } catch (erro) {
      alert('cadastro invalido')
    }

  }
  const buscarTarefas = async () => {
    try {
      const token = localStorage.getItem('token')      
      const resultado = await axios.get(`http://localhost:3000/tarefas`, {
        headers: {
          Authorization: token
        }, 
        // body: {

        // }
      })
      setTarefas(resultado.data.tarefas)
    } catch(erro) {
      alert('token invalido')
    }
  }
  
  const criarTarefas = async () => {
    try {
      const token = localStorage.getItem('token')      
      await axios.post(`http://localhost:3000/tarefas`, {
        headers: {
          Authorization: token
        }, 
        body: {
          // pegar dados de um estado que vem de um formulario
        }
      })
    } catch(erro) {
      alert('token invalido')
    }
  }
  return (
    <>
      <div>
        <h1>Tela de login</h1>
        Email : <input type="text" value={email} onChange={(evento) => setEmail(evento.target.value)} /><br></br>
        Senha : <input type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} /><br></br>
        <button onClick={enviar}>Enviar</button>
      </div>

      <div>
        <h1>Tela de Cadastrar</h1>
        Email : <input type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} /><br></br>
        Nome : <input type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} /><br></br>
        Senha : <input type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} /><br></br>
        <button onClick={cadastrar}>Cadastrar</button>
      </div>

      <div>
        <button onClick={buscarTarefas}>Lista tarefas</button>
        {tarefas && tarefas.map(tarefa => (
          <h5>{tarefa.descricao}</h5>
        ))}
      </div>
    </>
  )
}

export default App

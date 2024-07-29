import { useState } from 'react'
import './home.css'

import { auth, db } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

export default function Home(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
             navigate('/admin', {replace: true})
        })

        .catch(()=>{
            console.log('Erro ao fazer o Login!')
        })
    }

    return(
      <div className='home-container'>
        <h1>Lista de tarefas</h1>
        <span>Gerencie sua agenda de forma fácil</span>

        <form className='form' onSubmit={handleLogin}>
            <input
            type = 'text'
            placeholder='Digite seu E-mail: '
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type = 'password'
            placeholder='Digite sua senha: '
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit'>Acessar</button>
        </form>
         <Link className='button-link' to='register'>Não possui uma conta? Cadastra-se</Link>
      </div>
    )
  }
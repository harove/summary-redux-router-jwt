import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginThunk } from '../../store/login/thunks'

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const cb = ()=>{
        history.push("/")
    }

    const handlerSubmit = (e)=>{
        e.preventDefault()
        dispatch(loginThunk({username,password},cb))
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)} />
                <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
                <button type="submit" >Enviar</button>
            </form>
        </div>
    )
}

export default Login

import { useContext, useState } from 'react'
import { login } from '../Services/auth.service'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { HostelContext } from '../context/hostelContext'


function LoginForm() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errs, setErrs] = useState('') //Para mostrar si hay algún error
  const navigate = useNavigate()

  const {hostel, setHostel} = useContext(HostelContext)

    async function handleClick(event) {
        event.preventDefault()
        try {
            let response = await login(email, password)
            setErrs('')
            console.log(response.name)
            localStorage.setItem('token', response.token)
            setHostel(response.hostel)


            

            toast.success('Hello World ' + response.name)
            navigate('/') 
        } catch (error) {
            setErrs(error.message)
        }

    }

    return (
      <>
        <form className="form"> 
        <label className='inicio'>Iniciar Sesion</label>
          <label>Correo Electronico:</label>
          <input
            className="email"
            placeholder="Introduce tu email"
            type="email"
            onChange={function (event) {
              setEmail(event.target.value);
            }}
          />
           
           <label>Contraseña:</label>
          <input
          className='pass'
            placeholder="Introduce tu contraseña"
            type="password"
            onChange={function (event) {
              setPassword(event.target.value);
            }}
          />

          {errs && <p className="error">{errs}</p>}

          <button className="ingresa" onClick={handleClick}>Ingresa</button>
        </form>
       
      </>
    );
}

export default LoginForm
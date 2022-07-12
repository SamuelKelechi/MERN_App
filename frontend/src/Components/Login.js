import React,{useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const {name, email, password, password2} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <>
      <section className='Heading'>
        <h1>
          <FaSignInAlt style={{paddingRight:"10px"}}/> Login
        </h1>
        <p>Login and start setting tasks</p>
      </section>

      <section className='Form'>
        <form onSubmit={onSubmit}>

          <input 
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={onChange}
          />

          <input 
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={onChange}
          />

          <button type='submit'>Submit</button>
        </form>
      </section>
    </>
  )
}

export default Login

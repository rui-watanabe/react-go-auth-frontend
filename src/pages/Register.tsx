import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const url = process.env.REACT_APP_API_REGISTER_URL
    await axios.post(url, {name, email, password})
    setRedirect(true)
  }

  if(redirect) {
    return <Navigate to="/login" />
  }

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>
        <input 
          className="form-control" 
          placeholder="Name" 
          required
          onChange={e => setName(e.target.value)}
        />
        <input 
          type="email" 
          className="form-control" 
          placeholder="name@example.com" 
          required 
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          className="form-control" 
          placeholder="Password" 
          required 
          onChange={e => setPassword(e.target.value)}
        />
      <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Register

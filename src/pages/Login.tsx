import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const url = process.env.REACT_APP_API_LOGIN_URL
    await axios.post(url, {email, password}, { withCredentials:  true})
    console.log("Login success")
  }


  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  )
}

export default Login

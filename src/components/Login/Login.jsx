import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
        <h1>Finance System</h1>
        <div className="login-card">
            <form action="" className='login-form'>
                <h2 className="login-title">Username</h2>
                <input type="text" className='input-login'/>
                <h2 className="login-title">Password</h2>
                <input type="password" className='input-login'/>
                <button type="submit" className='login-btn'>Login</button>
            </form>
        </div>
        <a href="#" className='register-btn'>Register</a>
    </div>
  )
}

export default Login
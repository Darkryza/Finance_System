import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register-container'>
        <h1>Finance System</h1>
        <div className="register-card">
            <div className="register-title">Name</div>
            <input type="text" className="register-input" />
            <div className="register-title">Username</div>
            <input type="text" className="register-input" />
            <div className="register-title">Email</div>
            <input type="text" className="register-input" />
            <div className="register-title">Password</div>
            <input type="password" className="register-input" />
            <div className="register-title">Comfirm Password</div>
            <input type="password" className="register-input" />
            <div className="btns">
                <Link to="/" className="register-btn">Cancel</Link>
                <Link className='register-btn'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Register
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';

export const Login = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data value for a Registration 
    const email = e.target[0].value;
    const password = e.target[1].value;

    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">My Chat</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
                {error && <span>Something as wrong</span>}
            </form>
            <p>You don`t have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

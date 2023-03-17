import React, { useState } from "react";
import mainlogo from '../img/mainlogo.png'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import '../App.css'
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className='logo'> <img className="mainLogo" src={mainlogo}/> Let's chat</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username....'/>
            <input type="password" placeholder='password....'/>
            <button>Sign in</button>
            {err && <span>User not found or Something went Wrong</span>}
        </form>
        <p>you don't have an account? <Link to="/register">Register</Link></p>
    </div>
    </div>
  )
}

export default Login
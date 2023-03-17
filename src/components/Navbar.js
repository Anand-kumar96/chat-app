import React, { useContext } from 'react'
import '../style/Navbar.css'
import { signOut } from 'firebase/auth'
import  {auth} from '../firebase'
import mainlogo from '../img/mainlogo.png'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className='navbar'>
        <span className='logoNav'><img className="mainLogo" src={mainlogo}/> Let's chat</span>
        <div className='user'>
            <img src={currentUser.photoURL}  alt='user'/>
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar
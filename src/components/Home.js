import React, { useState } from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'
import '../style/Home.css'

const Home = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = event => {
    setIsActive(current => !current);
  };
  return (
    <div className='home'>
      <div className={isActive ?'container' : 'changeFullScreen'} onDoubleClick={handleClick}>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
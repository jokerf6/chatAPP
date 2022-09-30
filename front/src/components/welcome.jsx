import React from 'react'
import Logo from "../assets/robot.gif"
import "../assets/welcome.css"
export default function CHAT() {
    const name = "fahd";
  return (
    <>
    <div className='welcome'>
          <img src={Logo} alt="logo"></img>
          <h1>Welcome,<span>{name}</span></h1>
          <h3>Please select a chat to Start Messaging</h3>
    </div>
    </>
  )
}


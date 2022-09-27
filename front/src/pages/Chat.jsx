import React from 'react'
import CHAT from "../components/welcome"
import "../assets/welcome.css"
import CONTACTS from '../components/contacts'
const Chat = () => {
  return (
<>
<div className='all'>
  <div className="container">
  <CONTACTS />

      < CHAT/>
      </div>
    </div>
    </>
  )
}

export default Chat

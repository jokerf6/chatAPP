import React from 'react'
import Logo from "../assets/logo.svg"
import axios from 'axios'
export default function CONTACTS(){

 const users = axios.get(`http://127.0.0.1:5000/users`).then(data=>data.data).catch(err=>err);
 console.log(users);

    return (

 
<>

    <div className='allContacts'>
      <div className="brand">
        <img src={Logo} alt="logo" />
        <h3>Fahd</h3>
      </div>
        <div className="contacts">
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
         <h1>fahd</h1>
   
        </div>
    </div>
    </>

  )
}


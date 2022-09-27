import React from 'react'
import { useState } from "react";
import Logo from "../assets/loading.gif"
import LOGINBUTTON from "../components/buttonLogin"

export default function FORMLOGIN()  {
    const [values, setValues] = useState({
        email: "",
        password: "",
      });
    const handleChange = (event)=>{
        setValues({ ...values, [event.target.name]: event.target.value });
    }
  return (
    <>
    <form>
      <div className="brand">
      <img src={Logo} alt="logo" />
      <h1>fahd</h1>
      </div>
            <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <LOGINBUTTON />
    </form>
    </>
  )
}

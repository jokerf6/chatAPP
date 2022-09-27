import React, { useEffect } from 'react'
import { useState } from "react";
import Logo from "../assets/logo.svg"
import LOGINBUTTON from "../components/buttonLogin"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export default function FORMLOGIN()  {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
    const [values, setValues] = useState({
        email: "",
        password: "",
      });
    const handleChange = (event)=>{
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const handleSubmit =  (event) => {
      event.preventDefault();
        const { email,  password } = values;
        axios.post(`http://127.0.0.1:5000/login`, {
          email,
          password,
        }).then(data=>hand(data.data)).catch(err=>hand(err.response.data))

        // console.log('res',res);
    };

    useEffect(()=>{
     if( localStorage.getItem('access_token')){
    console.log(localStorage.getItem("access_token"));
       navigate("/");
    }
    }, [])


    function hand(data){
    console.log(data);
    if(data.code !== "Success"){
    toast.error(
      "Password incorrect",
      toastOptions
    );
    }
    else{
       localStorage.setItem(
        "access_token",
        JSON.stringify(data.data.id)
      );
      console.log(data.data)
     // window.location.href = "http://127.0.0.1:3000"
     navigate("/")
    }
    }
  return (
    <>
    <form action="" onSubmit={(event) => handleSubmit(event)}>
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
         <ToastContainer />

    </form>
    </>
  )
}

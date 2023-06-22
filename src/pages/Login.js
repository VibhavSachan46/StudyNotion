import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome back"
      description1="Build skills for today, tommorow, and beyond."
      description2="Education to future-proof your carrer"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}

    />
  )
}

export default Login
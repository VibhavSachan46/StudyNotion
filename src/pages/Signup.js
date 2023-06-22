import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tommorow, and beyond."
      description2="Education to future-proof your carrer"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
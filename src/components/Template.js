import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import Loginform from './Loginform'
import login from "../assets/login.png"

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>

                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
                    (<Loginform setIsLoggedIn={setIsLoggedIn}/>)
                }
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with Google</p>
                </button>
            </div>

            <div>
                <img src={frameImage}
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading='lazy' />

                <img src={login}
                    alt="Students"
                    width={558}
                    height={490}
                    loading='lazy' />
            </div>
        </div>
    )
}

export default Template
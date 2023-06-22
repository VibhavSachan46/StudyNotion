import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created")
        const accountData = {
            ...formData
        };
        console.log("printing account data")
        console.log(accountData);

        navigate("/dashboard");
    }

    const [showPassword, setShowPassword] = useState(false)
    return (
        <div>
            {/* Student-Instructor tab */}
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                {/* First And last name */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name="firstName"
                            onChange={changeHandler}
                            placeholder='Enter First Name7'
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name="lastName"
                            onChange={changeHandler}
                            placeholder='Enter Last Name7'
                            value={formData.lastname}
                        />
                    </label>
                </div>

                {/* Email Add */}
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type='email'
                        name="email"
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                    />
                </label>

                {/* createPassword and confirm pass */}

                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder='Create password'
                            value={formData.password}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>

                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>
                
                <button>
                    Create Account
                </button>


            </form>
        </div>
    )
}

export default SignupForm
import RegisterForm from "../../../Componen/RegisterForm";
import toast, {Toaster} from "react-hot-toast";
import {useRef} from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../Lib/Axiosinstance";

export default function Register() {

    const inputUsername = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputConfirmPassword = useRef()

    const[isLoading, setIsLoading] = useState(false)

    const onRegister = async () => {
        try {
            // Step-1. Validation Input
            if(inputUsername.current.value.length < 5) throw({message : 'Minim 5 Character'})
            if(!inputEmail.current.value.includes('@')) throw({message: 'Email Not Valid'})
            if(inputPassword.current.value !== inputConfirmPassword.current.value) throw({message: 'Password Doesnt Math'})

            setIsLoading(true)

            // Check Username or Email Exist or Not?
             const response = await axiosInstance.get(`/user?email=${inputEmail.current.value}`)
            
            if(response.data.length > 0) throw ({message: 'Email Already Exist!'})
    

            // Step-2. Sent Post Request
            await axiosInstance.post(`http://localhost:5000/user`,{username: inputUsername.current.value, email:inputEmail.current.value, password: inputPassword.current.value})
            toast.success('Register Success!')
            
            inputUsername.current.value = ''
            inputEmail.current.value = ''
            inputPassword.current.value = ''
            inputConfirmPassword.current.value = ''
        } catch (error) {
            toast.error(error.message)
        } finally{
            setIsLoading(false)
        }
    }

    return(
        <>
            <Toaster/>
            <div className="flex justify-center py-5 text-3xl font-bold"> 
            <h1>
                Register Your Account    
            </h1>      
            </div>
            <div className="flex justify-center">
                <div className="w-[500px]">
                <RegisterForm inputRef={inputUsername} type='text' label='Username'/>
                <RegisterForm inputRef={inputEmail} type='text'label='Email'/>
                <RegisterForm inputRef={inputPassword} type='password'label='Pasword'/>
                <RegisterForm inputRef={inputConfirmPassword} type='password'label='Confirm Password'/>
                <button disabled={isLoading} onClick={onRegister} className="btn bg-red-700 text-white w-full mt-5">
                {isLoading? 'Loading...':'Submit'}
                </button>
                <div className="flex justify-center">
                Already Have Account? <Link to='/login'>Login Here</Link>
                </div>
            </div>
            </div>
        </>
    )
}

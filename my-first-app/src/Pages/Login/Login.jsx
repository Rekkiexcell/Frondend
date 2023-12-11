import { useContext, useRef } from "react";
import RegisterForm from "../../Componen/RegisterForm"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast'
import { userDataContext } from "../../Data/userDataContext";

export default function Login(){

    const inputUsername = useRef()
    const inputPassword = useRef()
    const navigate = useNavigate();

    const { setUser} = useContext(userDataContext)

    const onLogin = async() => {
        try {
            // Step-1. Ambil data dari input
            const username = inputUsername.current.value
            const password = inputPassword.current.value 

            // Step-2. Ambil data dari JSON-Server && 
            const response = await axios.get(`http://localhost:5000/user?username=${username}&password=${password}`)
            if(response.data.length === 0) throw {message: 'Login Failed!'}
            
            setUser(response.data[0].username)
            toast.success('Login Success!')
            setTimeout(() => {
                navigate('/')
            }, 3000)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return(
        <>
            <Toaster />
            <div className="flex flex-col items-center">
                <div className="w-[500px]">
                    <RegisterForm inputRef={inputUsername} type="text" label="Username" />
                    <RegisterForm inputRef={inputPassword} type="password" label="Password" />
                    <button onClick={onLogin} className="btn bg-red-700 text-white w-full mt-5">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}
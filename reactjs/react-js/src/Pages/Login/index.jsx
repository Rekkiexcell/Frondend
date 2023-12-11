import { useEffect, useState } from "react"

export default function Login(){

    const [number, setNumber] = useState(0)

    // Mounting
    useEffect(() => {
        console.log('Mounting')
    },[])

    //Update
    useEffect(() => {
        console.log('Update')
    },[number])

    //Unmounting
    useEffect(() => {
        return() => {
            console.log('Unmounting')
        }
    },[])

    return(
        <>
            Login page 
        <h3>
            {number}
        </h3>
        <button onClick={() => setNumber(1)} className="btn bg-blue-300">
            Increment
        </button>
        </>
    
    )
}
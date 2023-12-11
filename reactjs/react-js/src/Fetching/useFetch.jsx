import { useState, useEffect } from "react";
import { AxiosInstance } from "../Lib/AxiosInstance";

export default function useFetch(url){
    const[data, setData] = useState([]) //[] ---> [{}]
    
    
    const onGetData = async() => {
        try {
            const res = await AxiosInstance.get(url)
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        // Get Todos from db.json
        onGetData()
    }, [])

    return { data }
}
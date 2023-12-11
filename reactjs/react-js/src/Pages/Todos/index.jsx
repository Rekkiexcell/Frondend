import useFetch from "../../Fetching/useFetch"

// useRef untuk mengambil value dari input
// 1.1. Import useRef
import { useEffect, useRef } from "react";
import { AxiosInstance } from "../../Lib/AxiosInstance";

export default function Todos(){

    const {data} = useFetch('/todos')

    // 1.2. Define variable with value useRef()
    const inputTodo = useRef()

    const onCreateData = async() => {
        try {
            await AxiosInstance.post('/todos', {
                todo: inputTodo.current.value // todo: mengikuti key db.json, inputTodo.current.value: value inputan yang akan disimpan
            })

            alert('Create Todo Success!')
            useFetch('/todos')
        } catch (error) {
            
        }
    }

    useEffect(() => {

    }, [data])

    return(
        <div className="flex flex-col items-center py-3">
            <section className="py-10 flex gap-1">
                <input type="text" ref={inputTodo} placeholder="Input Your Todo" className="w-[500px] px-3 py-1 border border-blue-500 rounded-md" />
                <button onClick={onCreateData} className="btn bg-blue-500 px-3 py-1 text-white hover:bg-gray-300 hover:text-black rounded-md">
                    Create
                </button>
            </section>
            <section>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Todo</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        {
                            data.length === 0? 
                                <span className="loading loading-dots loading-lg"></span>
                            :
                                data.map((item, index) => {
                                    return(
                                        <>
                                              <tr>
                                            <th>1</th>
                                            <td className="text-lg">{item.todo}</td>
                                            <td>
                                                <button className="btn bg-red-600 text-white">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                        </>
                                  
                                    )
                                })
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
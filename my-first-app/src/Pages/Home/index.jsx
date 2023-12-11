import { useEffect, useState } from "react";
import Card from "../../Componen/Card";
import { axiosInstance } from "../../Lib/Axiosinstance";
import { Link } from "react-router-dom";


export default function Home(){
    const[products, setProducts] = useState([])

    const onGetData = async() => {
        try {
            const response = await axiosInstance.get('/products')
            setProducts(response.data)
        } catch (error) {
            
        }
    }


    useEffect(() => {
        onGetData()
    }, [])

    return(
        <>
           <section id="jumbotron">
                <div >
                    <img className="w-screen" 
                        src="https://spaces.ilfen.co/assets/image/produk/monoline_tshirt.jpg"/>
                </div>
            </section> 
            <section id="products-lists" className="px-4 py-4">
                <div className="flex grid grid-cols-4 gap-4">
                    {
                        !products.length?
                            'Loading...'
                            :
                        products.map((item, index) => {
                            return(
                                <>  
                                    <Card data={item} />
                                  
                                </>
                            )
                        })
                    }
                </div>
            </section>
            <div>
            
            </div>
        </>
    )
}
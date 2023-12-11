import { useEffect, useState } from 'react';
import { axiosInstance } from './../../Lib/AxiosInstance';
import { useParams } from 'react-router-dom';

export default function DetailProduct(){
    const params = useParams()
    const slug = params.slug 
    console.log(slug)

    const [data, setData] = useState({})

    const getDetail = async() => {
        try {
            const response = await axiosInstance.get(`/products/${slug}`)
            console.log(response)
            setData(response.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getDetail()
    }, [])

    return(
        <>
            <section>
                <div className='grid grid-cols-3 px-3 py-3'>
                    <div className="col-span-2">
                        <div className='flex justify-center gap-3'>
                            <img src='https://spaces.ilfen.co/assets/image/produk/dacbac76-46e9-4636-8bf8-2fecb7e1ecda.jpg' 
                                width={'434px'}
                                height={'652px'}
                                className='rounded-lg'
                            />
                            <img src='https://spaces.ilfen.co/assets/image/produk/dacbac76-46e9-4636-8bf8-2fecb7e1ecda.jpg' 
                                width={'434px'}
                                height={'652px'}
                                className='rounded-lg'
                            />
                        </div>
                        <div className='flex justify-center mt-3 gap-3'>
                            <div className='w-[75px] h-[75px]'>
                                <img src='https://spaces.ilfen.co/assets/image/produk/dacbac76-46e9-4636-8bf8-2fecb7e1ecda.jpg' 
                                    className='rounded-lg object-cover w-full h-full'
                                />
                            </div>
                            <div className='w-[75px] h-[75px]'>
                                <img src='https://spaces.ilfen.co/assets/image/produk/dacbac76-46e9-4636-8bf8-2fecb7e1ecda.jpg' 
                                    className='rounded-lg object-cover w-full h-full'
                                />
                            </div>
                            <div className='w-[75px] h-[75px]'>
                                <img src='https://spaces.ilfen.co/assets/image/produk/dacbac76-46e9-4636-8bf8-2fecb7e1ecda.jpg' 
                                    className='rounded-lg object-cover w-full h-full'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <h1 className='text-5xl font-bold'>
                                {data.name}
                            </h1>
                            <h1 className='text-3xl font-light'>
                                Rp. {data?.price?.toLocaleString('id-ID')}
                            </h1>
                        </div>
                        <div className='mt-5 flex gap-3'>
                            {
                                data?.size?.map((item, index) => {
                                    return(
                                        <span className='border border-black w-[30px] h-[30px] flex justify-center rounded-lg'>
                                            {item}
                                        </span>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-5'>
                            <button className='btn bg-stone-950 text-white hover:text-stone-950 w-full'>
                                Add to Cart 
                            </button>
                        </div>
                        <div className='mt-3'>
                            <button className='btn bg-white border border-stone-950 hover:bg-white border border-stone-950 w-full'>
                                Add to Wishlist 
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
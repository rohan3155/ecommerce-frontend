import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Crousel from './ProductComponents/Crousel';

const FullProduct = () => {
    const { id } = useParams();
    console.log(id)
    const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])

    const body = {
        "_id": id
    }
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewProduct', body)
                setUData(response.data);
                console.log(response.data)




            } catch (error) {
                console.error(error.message);
            }
            // console.log(UData)
            setLoading(false);
        }
        fetchData();
        // return(response);

    }, []);
    return (
        <div>
            <Crousel />
            {!loading && (
                <>


                    {UData.map((item, key, index) => (


                        <div key={key}>
                            <div className='flex flex-col justify-around md:flex-row'>
                                <div className='flex justify-center'>

                                    <h1 className='my-8 text-3xl text-red-400 md:text-5xl '>Original Price→</h1>
                                    <h1 className='my-8 text-3xl line-through md:text-5xl'>₹{Number(item.SellingPrice) + 1000}</h1>
                                </div>
                                <div className='flex justify-center'>

                                    <h1 className='my-8 text-3xl font-semibold md:text-5xl text-emerald-400 '>Sale Price→</h1>
                                    <h1 className='my-8 text-3xl md:text-5xl '>₹{Number(item.SellingPrice)}</h1>
                                </div>
                            </div>
                            <div>
                            <h1 className='my-8 text-3xl font-semibold text-center '>{item.ProductName}</h1>
                            <h1 className='my-8 text-4xl font-semibold text-center '>{item.BrandName}</h1>
                            </div>
                            <div>
                            <h1 className='my-8 text-3xl font-semibold text-center '>{item.Description}</h1>
                            <h1 className='my-8 text-3xl font-semibold text-center '>{item.CategoryName.CategoryName}</h1>
                            
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default FullProduct

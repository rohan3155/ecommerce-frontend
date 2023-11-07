import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Cards from './Cards';

const Category = (props) => {
    const {id} = useParams();
    console.log(id)
    const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const  response = await axios.post('http://localhost:3155/Admin/viewProduct')
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
    <div className='my-8'>
    <h1 className='my-5 text-5xl font-semibold text-center'>{props.title}</h1>
    <div className='flex flex-wrap justify-center gap-8'>
    {!loading && (
        <>
        

            {UData.map((item, key, index) => (
                
                <div>
              {item.CategoryName.CategoryName == id ? (
                <div>
                <Link to={`/products/${item._id}`} key={key}> <Cards  price={item.SellingPrice} productname={item.ProductName} brandname={item.BrandName} category={item.CategoryName.CategoryName} id={item._id}/></Link>
                </div>
              ):(
                <div>
                </div>
              )
                
              }
                </div>
            ))
        }
        </>
    )} 
    </div>
    </div>
  )
}

export default Category

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../Cards';

const Products = (props) => {
    const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])

    // const id = useParams();
    // console.log("id", id)
   
// useEffect(() => {
//     UData.map((item)=>{
//         console.log("item._id",item._id)
//         setId(item._id)
//     })
// }, [UData])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const  response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewProduct')
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
    <div className=''>
    <h1 className='text-5xl font-semibold text-center '>{props.title}</h1>
    <div className='flex flex-wrap justify-center gap-8 my-8'>
    {!loading && (
        <>
        

            {UData.map((item, key, index) => (
                
                <Link to={`/products/${item._id}`} key={key}> <Cards  price={item.SellingPrice} productname={item.ProductName} brandname={item.BrandName} category={item.CategoryName.CategoryName} id={item._id}/></Link>
            ))
        }
        </>
    )} 
    </div>
    </div>
  )
}

export default Products

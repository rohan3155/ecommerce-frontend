import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const CategoryFIlter = () => {
    const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])
    const {id } = useParams();
    console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const  response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewCategory')
                setUData(response.data);
                console.log(response)
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
    <li tabIndex={0}>
    <details>
        <summary id="name">Category</summary>
        <ul className="p-2">
      
        {!loading && (
            <>

                {UData.map((item, key, index) => (
                    <li key={key}><Link to={`/products/${document.getElementById('name').innerHTML}/${item.CategoryName}`}>{item.CategoryName}</Link></li>
                ))
            }
            </>
        )}
           
        </ul>
    </details>
</li>
  )
}

export default CategoryFIlter

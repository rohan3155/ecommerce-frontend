import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const CategoryDropdown = () => {
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
        <summary>Category</summary>
        <ul className="p-2">
        {!loading && (
            <>

                {UData.map((item, key, index) => (
                    <li key={key}><Link to={`/category/${item.CategoryName}`}>{item.CategoryName}</Link></li>
                )).slice(0,4).sort()
            }
            </>
        )}
           
        </ul>
    </details>
</li>
  )
}

export default CategoryDropdown

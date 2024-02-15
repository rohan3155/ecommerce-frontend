import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const SubCategoryFIlter = () => {
    const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])
    const {id } = useParams();
    console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const  response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewSubCategory')
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
        <summary id='filtername'>SubCategory</summary>
        <ul className="p-2">
        {!loading && (
            <>

                {UData.map((item, key, index) => (
                    <li key={key}><Link to={`/products/${document.getElementById('filtername').innerHTML}/${item.SubCategoryName}`}>{item.SubCategoryName}</Link></li>
                ))
            }
            </>
        )}
           
        </ul>
    </details>
</li>
  )
}

export default SubCategoryFIlter

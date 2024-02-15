import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../Cards';

const TrendingProducts = (props) => {
    const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])
// console.log( "jckj----------------------------------------------")
    // const [imageName, setImageName] = useState('');
    // const [imageData, setImageData] = useState(null);
    // const id = useParams();
    // console.log("id", id)
    // useEffect(() => {
    //     // Replace 'your_encrypted_file_name' with the actual encrypted file name
    //     // const encryptedFileName = 'bdcb467f022461af7193b564c318ce64';
    //     const productId = '64e2f3490acf179288d7acc2';
    //     axios.get(`https://ecommerce-backend-556q.onrender.com/Admin/viewimage/${id.id}`, {
    //         responseType: 'arraybuffer',
    //     })
    //         .then((response) => {
    //             console.log(response.data)
    //             const blob = new Blob([response.data], { type: 'image/jpeg' });
    //             const url = URL.createObjectURL(blob);
    //             setImageData(url);
    //             console.log(url)
    //         })
    //         .catch((error) => {
    //             console.error('Image retrieval failed:', error);
    //         });

    // }, []);
    


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewProduct')
                setUData(response.data);
                console.log(response.data)
                response.data.map((item)=>{
                    console.log(item._id)
                })




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
            <h1 className='my-5 text-5xl font-semibold text-center'>{props.title}<i className="mx-4 fa-solid fa-chart-simple text-emerald-300"></i></h1>
            <div className='flex flex-wrap justify-center gap-8'>
                {!loading && (
                    <>


                        {UData.map((item, key, index) => (

                            <Link to={`/products/${item._id}`} key={key}> <Cards price={item.SellingPrice} productname={item.ProductName} brandname={item.BrandName} category={item.CategoryName.CategoryName} id={item._id} /></Link>
                        )).slice(0, 20)
                        }
                    </>
                )}
            </div>
        </div>
    )
}

export default TrendingProducts

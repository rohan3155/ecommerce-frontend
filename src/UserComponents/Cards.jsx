import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import mbimage1 from '../assets/img/image2.jpg'
const Cards = (props) => {
    const [productId, setproductId] = useState("")
    const UID = localStorage.getItem("Uid");
    const UserId = UID;
    const quantity =1;
    // console.log(UserId)
    
        const handleCart = async () => {

            try {
                const  response = await axios.post('http://localhost:3155/User/addtocart',UserId,productId,quantity) 
                // console.log(response.data)
               
            } catch (error) {x``
                console.error(error.message);
            }
            // console.log(UData)
        }
        const [imageName, setImageName] = useState('');
        const [imageData, setImageData] = useState(null);
           const [id, setId] = useState(null)
           useEffect(() => {
               // Replace 'your_encrypted_file_name' with the actual encrypted file name
               // const encryptedFileName = 'bdcb467f022461af7193b564c318ce64';
               // const productId = '64e2f3490acf179288d7acc2';
               axios.get(`http://localhost:3155/Admin/viewimage/${props.id}`, {
                   responseType: 'arraybuffer',
               })
                   .then((response) => {
                       console.log(response.data)
                       const blob = new Blob([response.data], { type: 'image/jpeg' });
                       const url = URL.createObjectURL(blob);
                       setImageData(url);
                       console.log(url)
                   })
                   .catch((error) => {
                       console.error('Image retrieval failed:', error);
                   });
       
           }, []);
   console.log("props",props)
   
    return (
        <div className="shadow-xl card card-compact w-96 bg-base-100">
            <figure><img src={imageData} alt="Shoes" className='w-full overflow-hidden transition-all duration-700 h-80 hover:scale-150 hover:translate-x-1/4 ' /></figure>
            <div className="card-body">
                <h2 className="card-title">₹{props.price}</h2>
                <div className="flex justify-between w-full">
                <div>
                <h2 className="text-sm card-title">{props.productname}</h2>
                </div>
                <div>
                <p>{props.category}</p>
                </div>
                </div>
                <p>{props.brandname}</p>
               
                <div className="justify-end card-actions">
                  
                </div>
            </div>
        </div>
    )
}

export default Cards

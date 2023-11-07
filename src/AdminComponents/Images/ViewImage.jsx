import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ImageDisplay() {
  const [imageName, setImageName] = useState('');
  const [imageData, setImageData] = useState(null);
const id = useParams();
console.log("id",id)
  useEffect(() => {
    // Replace 'your_encrypted_file_name' with the actual encrypted file name
    // const encryptedFileName = 'bdcb467f022461af7193b564c318ce64';
    const productId = '64e2f3490acf179288d7acc2';
    axios.get(`http://localhost:3155/Admin/viewimage/${id.id}`, {
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

  return (
    <div>
      <h2>Image Display</h2>
      {imageData && <img className='h-80' src={imageData} alt={imageName} />}
    </div>
  );
}

export default ImageDisplay;

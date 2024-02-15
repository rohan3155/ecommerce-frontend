import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ImageUploadForm() {
  const {id} =useParams();
  const [file, setFile] = useState(null);
  const [productId, setProductId] = useState(id);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('featuredImage', file);
    formData.append('ProductId', productId);

    try {
      const response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/addimage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productId">Product ID:</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={handleProductIdChange}
          />
        </div>
        <div>
          <label htmlFor="image">Choose an image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default ImageUploadForm;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewProduct = () => {
  const [loading, setLoading] = useState(true);
  const [UData, setUData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3155/Admin/viewProduct"
        );
        setUData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
      // console.log(UData)
      setLoading(false);
    };
    fetchData();
    // return(response);
  }, []);

  return (
    <div className="w-full overflow-auto pt-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>ProductName</th>
            <th>BrandName</th>
            <th>Description</th>
            <th>BuyingPrice</th>
            <th>SellingPrice</th>
            <th>CategoryName</th>
            <th>SubCategoryName</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* row 1 */}

          {!loading && (
            <>
              {UData.map((item, key, index) => (
                <tr key={key}>
                  <th>{key + 1}</th>
                  <td>{item.ProductName}</td>
                  <td>{item.BrandName}</td>
                  <td>{item.Description}</td>
                  <td>{item.BuyingPrice}</td>
                  <td>{item.SellingPrice}</td>
                  <td>{item.CategoryName.CategoryName}</td>
                  <td >{item.SubCategoryName.SubCategoryName}</td>
                  <td className="">
                    <div className="join join-horizontal lg:join-horizontal">
                      <Link
                      title="Edit Product"
                        to={`/admin/EditProduct/${item._id}`}
                        onClick={() => console.log(item._id)}
                      >
                        <button className="btn join-item">
                          <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>
                      
                      <Link
                      title="Add Image"
                        to={`/admin/addimage/${item._id}`}
                        onClick={() => console.log(item._id)}
                      >
                        <button className="btn join-item">
                          <i className="fa-solid fa-image"></i>
                        </button>
                      </Link>
                      <Link
                      title="View Image"
                        to={`/admin/viewImage/${item._id}`}
                        onClick={() => console.log(item._id)}
                      >
                        <button className="btn join-item">
                        <i className="fa-solid fa-eye"></i>
                        </button>
                      </Link>
                      <Link
                      title="delete Product"
                      
                        to={`/admin/DeleteProduct/${item._id}`}
                        onClick={() => console.log(item._id)}
                      >
                        <button className="btn join-item">
                          <i className="text-red-500 fa-solid fa-trash"></i>
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProduct;

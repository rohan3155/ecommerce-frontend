import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../../LoadingPage'





const AddProduct = () => {
    const [loading2, setLoading2] = useState(true);
    const [UData2, setUData2] = useState([])
  
   useEffect(() => {
          const fetchData = async () => {
              setLoading2(true);
              try {
                  const response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewCategory')
                  setUData2(response.data);
                  console.log(response.data)
  
  
  
  
              } catch (error) {
                  console.error(error.message);
              }
              // console.log(UData)
              setLoading2(false);
          }
          fetchData();
          // return(response);
  
      }, []);




        const [loading, setLoading] = useState(true);
  const [UData, setUData] = useState([])

 useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewSubCategory')
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



  const [ProductName, setProductName] = useState("")
  const [BrandName, setBrandName] = useState("")
  const [Description, setDescription] = useState("")
  const [BuyingPrice, setBuyingPrice] = useState("")
  const [SellingPrice, setSellingPrice] = useState("")
  const [CategoryName, setCategoryName] = useState("")
  const [SubCategoryName, setSubCategoryName] = useState("")


  const history = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();


      try {
          await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/addProduct', {
            ProductName, BrandName, Description, BuyingPrice,SellingPrice, CategoryName,SubCategoryName,
          }).then(res => {

              if (res.data.response === "All input is required" || res.data.response === "Product Already Exist") {

                  history("/admin/addProduct")
              } else if (res.data === "Product Added Successfully") {
                  // console.log(res.data.name)
                  console.log(res.data)
                  // localStorage.setItem("name",(res.data.name))
                  // const token = res.data.token;
                 
                  setTimeout(() => {
                      // e.preventDefault();
                      history("/admin/viewProduct")
                  }, 400);
                  
              }
          })
      } catch (error) {
          console.log(error)
      }
      
  }





  return (
    
     <div className="flex flex-col justify-center w-4/5 px-4 py-4 overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl 2xl:max-w-4xl">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Add Product</h1>
            <form className="space-y-4" method='post'
             onSubmit={handleSubmit}
             >
                        <div className="flex flex-col w-full gap-2 md:flex-row">
                            <div className='md:w-1/2'>
                                <label className="label">
                                    <span className="text-base label-text">ProductName </span>
                                </label>
                                <input id='ProductName' type="text" placeholder="ProductName" className="w-full input input-bordered input-primary"
                                    value={ProductName}
                                    onChange={e => setProductName(e.target.value)}
                                />
                            </div>
                            <div className='md:w-1/2'>
                                <label className="label">
                                    <span className="text-base label-text">BrandName</span>
                                </label>
                                <input id='BrandName' type="text" placeholder=" BrandName" className="w-full input input-bordered input-primary"
                                    value={BrandName}
                                    onChange={e => setBrandName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Description</span>
                            </label>
                            <input id='Description' type="text" placeholder="Description" className="w-full input input-bordered input-primary"
                                value={Description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">BuyingPrice</span>
                            </label>
                            <input id='BuyingPrice' type="text" placeholder="BuyingPrice" className="w-full input input-bordered input-primary"
                                value={BuyingPrice}
                                onChange={e => setBuyingPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">SellingPrice</span>
                            </label>
                            <input id='SellingPrice' type="text" placeholder="SellingPrice"
                                className="w-full input input-bordered input-primary"
                                value={SellingPrice}
                                onChange={e => setSellingPrice(e.target.value)}
                            />
                        </div>
                        <div>
                        <label className="label">
                                <span className="text-base label-text">Category</span>
                            </label>
                        {!loading && (
                            <div>
                            <select className="w-full my-2 select select-bordered"  onChange={e=>setCategoryName(e.target.value)}>
                           <option value="">Choose Category</option>
                                {UData2.map((item, key, index) => (
                                    <option key={key} value={item._id}>{item.CategoryName}</option>
                                ))}
                                </select>
                            </div>
                        )}
                        </div>
                        <div>
                        <label className="label">
                                <span className="text-base label-text">SubCategory</span>
                            </label>
                        {!loading && (
                            <div>
                            <select className="w-full my-2 select select-bordered"  onChange={e=>setSubCategoryName(e.target.value)}>
                            <option value="">Choose SubCategory</option>
                           
                                {UData.map((item, key, index) => (
                                    <option key={key} value={item._id}>{item.SubCategoryName}</option>
                                ))}
                                </select>
                            </div>
                        )}
                        </div>

                        <div>
                            <button className="btn btn-block btn-primary">Add Product</button>
                        </div>
                       
                    </form>
            
            
        </div>
    </div>
    
  )
}

export default AddProduct

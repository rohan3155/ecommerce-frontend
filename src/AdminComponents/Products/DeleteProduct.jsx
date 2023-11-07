import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const DeleteProduct = () => {
  
    const [loading2, setLoading2] = useState(true);
    const [UData2, setUData2] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading2(true);
            try {
                const response = await axios.post('http://localhost:3155/Admin/viewCategory')
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




    const [loading1, setLoading1] = useState(true);
    const [UData1, setUData1] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading1(true);
            try {
                const response = await axios.post('http://localhost:3155/Admin/viewSubCategory')
                setUData1(response.data);
                console.log(response.data)




            } catch (error) {
                console.error(error.message);
            }
            // console.log(UData)
            setLoading1(false);
        }
        fetchData();
        // return(response);

    }, []);

    const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])


    const [ProductName, setProductName] = useState("")
    const [BrandName, setBrandName] = useState("")
    const [Description, setDescription] = useState("")
    const [BuyingPrice, setBuyingPrice] = useState("")
    const [SellingPrice, setSellingPrice] = useState("")
    const [CategoryName, setCategoryName] = useState("")
    const [SCategoryName, setSCategoryName] = useState("")
    const [SubCategoryName, setSubCategoryName] = useState("")
    const [SSubCategoryName, setSSubCategoryName] = useState("")

    const { id } = useParams();
    // console.log(id)
    const body = {
        "_id": id
    }
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.post('http://localhost:3155/Admin/viewProduct', body)
                setUData(response.data);
                console.log(response.data)

                setProductName(response.data[0].ProductName);
                setBrandName(response.data[0].BrandName);
                setDescription(response.data[0].Description);
                setBuyingPrice(response.data[0].BuyingPrice);
                setSellingPrice(response.data[0].SellingPrice);
                setCategoryName(response.data[0].CategoryName.CategoryName);
                setSubCategoryName(response.data[0].SubCategoryName.SubCategoryName);


            } catch (error) {
                console.error(error.message);
            }

        }
        fetchData();
        return () => {
            setLoading(false)

        };
        // return(response);

    }, []);







    const history = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            filter: { "_id": id },
            data: { ProductName, BrandName, Description, BuyingPrice, SellingPrice, SCategoryName, SSubCategoryName },
        }

        try {
            await axios.post('http://localhost:3155/Admin/deleteProduct', body).then(res => {

                if (res.data === " ") {

                    history(`/admin/EditProduct`)
                    setTimeout(() => {
                        // e.preventDefault();
                        location.reload()
                    }, 800);
                } else if (res.data.response === "Product Deleted Successfuly") {
                    console.log(res.data)
                    console.log(res.data.result)
                   setTimeout(() => {
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
                <h1 className="text-3xl font-semibold text-center text-gray-700">Delete Product</h1>
                <Link to={'/admin/viewProduct'}><button className='btn btn-success'> ← No ,Go Back</button></Link>
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
                                readOnly
                            />
                        </div>
                        <div className='md:w-1/2'>
                            <label className="label">
                                <span className="text-base label-text">BrandName</span>
                            </label>
                            <input id='BrandName' type="text" placeholder=" BrandName" className="w-full input input-bordered input-primary"
                                value={BrandName}
                                onChange={e => setBrandName(e.target.value)}
                                readOnly
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
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">BuyingPrice</span>
                        </label>
                        <input id='BuyingPrice' type="text" placeholder="BuyingPrice" className="w-full input input-bordered input-primary"
                            value={BuyingPrice}
                            onChange={e => setBuyingPrice(e.target.value)}
                            readOnly
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
                            readOnly
                            
                        />
                    </div>
                    
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Category</span>
                        </label>

                        {!loading2 && (
                            <div>
                                <select className="w-full my-2 select select-bordered" onChange={e => setSCategoryName(e.target.value)} >
                                    <option defaultValue={CategoryName}  readOnly>{CategoryName}</option>



                                </select>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">SubCategory</span>
                        </label>

                        {!loading1 && (
                            <div>
                                <select className="w-full my-2 select select-bordered" onChange={e => setSSubCategoryName(e.target.value)} >
                                
                                    <option defaultValue={SubCategoryName} readOnly >{SubCategoryName}</option>



                                </select>
                            </div>
                        )}
                    </div>

                    <div>
                        <button className="btn btn-block btn-error">Delete Product</button>
                    </div>

                </form>


            </div>
        </div>

    )
}

export default DeleteProduct

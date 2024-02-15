import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const EditCategory = () => {
  const { id } = useParams();
//   console.log(id)
  const body = {
    "_id": id
}




const [loading, setLoading] = useState(true);
const [UData, setUData] = useState([])
// const [SCData, setSCData] = useState([])


// useEffect(() => {
//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewSubCategory')
//             setSCData(response.data);
//             console.log(response.data)



//         } catch (error) {
//             console.error(error.message);
//         }
//         // console.log(UData)
//         setLoading(false);
//     }
//     fetchData();
//     // return(response);

// }, []);

 


    const [CategoryName, setCategoryName] = useState("")
    
    // const [SubCategoryName, setSubCategoryName] = useState("")
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const  response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewCategory',body)
            setUData(response.data);
            console.log(response.data)
            
            setCategoryName(response.data[0].CategoryName);
            // setSubCategoryName(response.data[0].SubCategoryName.SubCategoryName)
            
          
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
    filter:{ "_id": id},
    data:{CategoryName},
}

      try {
          await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/updateCategory', body).then(res => {

              if (res.data === " ") {

                  history(`/admin/editcategory`)
                  setTimeout(() => {
                    // e.preventDefault();
                    location. reload()
                }, 800);
              } else if (res.data.response === "Succesfully Updated Category") {
                  console.log(res.data)
                  console.log(res.data.result)
                      history("/admin/viewcategory")
              }
          })
      } catch (error) {
          console.log(error)
      }

     
  }





  return (
   
    <div className="flex flex-col justify-center w-4/5 px-4 py-4 overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl 2xl:max-w-4xl">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Update Category</h1>
            <Link to={'/admin/viewcategory'}><button className='btn btn-success'> ← No ,Go Back</button></Link>
            <form className="space-y-4" method='post'
             onSubmit={handleSubmit}
             >
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Category</span>
                            </label>
                            <input id='Category' type="text" placeholder="Category" className="w-full input input-bordered input-primary"
                                value={CategoryName}
                                onChange={e => setCategoryName(e.target.value)}
                            />
                            
                            
                         
                              
                         
                        </div>
                        

                        <div>
                            <button className="btn btn-block btn-primary">Update Category</button>
                        </div>
                       
                    </form>
            
            
        </div>
    </div>
  
  )
}

export default EditCategory

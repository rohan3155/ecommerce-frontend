import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../../LoadingPage'





const AddSubCategory= () => {


  const [SubCategoryName, setSubCategoryName] = useState("")



  const history = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();


      try {
          await axios.post('http://localhost:3155/Admin/addSubCategory', {
              SubCategoryName
          }).then(res => {

              if (res.data === "All input is required" || res.data === "SubCategory Already Exist") {

                  history("/admin/addsubcategory")
              } else if (res.data === "SubCategory Added Successfully") {
                  // console.log(res.data.name)
                  console.log(res.data)
                  // localStorage.setItem("name",(res.data.name))
                  // const token = res.data.token;
                 
                  setTimeout(() => {
                      // e.preventDefault();
                      history("/admin/viewsubcategory")
                  }, 400);
                  
              }
          })
      } catch (error) {
          console.log(error)
      }

      setSubCategoryName("")
  }





  return (
    
     <div className="flex flex-col justify-center w-4/5 px-4 py-4 overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl 2xl:max-w-4xl">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Add SubCategory</h1>
            <form className="space-y-4" method='post'
             onSubmit={handleSubmit}
             >
                        <div>
                            <label className="label">
                                <span className="text-base label-text">SubCategory</span>
                            </label>
                            <input id='SubCategory' type="text" placeholder="SubCategory" className="w-full input input-bordered input-primary"
                                value={SubCategoryName}
                                onChange={e => setSubCategoryName(e.target.value)}
                            />
                        </div>
                        

                        <div>
                            <button className="btn btn-block btn-primary">Add SubCategory</button>
                        </div>
                       
                    </form>
            
            
        </div>
    </div>
    
  )
}

export default AddSubCategory

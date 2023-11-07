import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import LoadingPage from '../../LoadingPage'





const AddCategory = () => {


    const [CategoryName, setCategoryName] = useState("")
    
   

  const history = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();


      try {
          await axios.post('http://localhost:3155/Admin/addCategory', {
                CategoryName
          }).then(res => {

              if (res.data.response === "All input is required" || res.data.response === "Category Already Exist") {

                  history("/admin/addcategory")
              } else if (res.data.response === "Category Added Successfully") {
                
                  console.log(res.data)
                
                 
                  
                  setTimeout(() => {
                    
                      history("/admin/viewcategory")
                  }, 400);
                  
              }
          })
      } catch (error) {
          console.log(error)
      }

      setCategoryName("")
  }


    return (

        <div className="flex flex-col justify-center w-4/5 px-4 py-4 overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl 2xl:max-w-4xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Add Category</h1>
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
                        <button className="btn btn-block btn-primary">Add Category</button>
                    </div>

                </form>


            </div>
        </div>

    )
}

export default AddCategory

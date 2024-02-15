import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../../LoadingPage'





const AddUser = () => {


  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const history = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();


      try {
          await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/addUser', {
              firstname, lastname, phone, email, password,
          }).then(res => {

              if (res.data === "All input is required" || res.data === "User Already Exist") {

                  history("/admin/adduser")
              } else if (res.data === "User Added Successfully") {
                  // console.log(res.data.name)
                  console.log(res.data)
                  // localStorage.setItem("name",(res.data.name))
                  // const token = res.data.token;
                 
                  setTimeout(() => {
                      // e.preventDefault();
                      history("/admin/viewuser")
                  }, 400);
                  
              }
          })
      } catch (error) {
          console.log(error)
      }

      setfirstname("")
      setlastname("")
      setphone("")
      setemail("")
      setpassword("")
  }





  return (
    
     <div className="flex flex-col justify-center w-4/5 px-4 py-4 overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl 2xl:max-w-4xl">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Add User</h1>
            <form className="space-y-4" method='post'
             onSubmit={handleSubmit}
             >
                        <div className="flex flex-col w-full gap-2 md:flex-row">
                            <div className='md:w-1/2'>
                                <label className="label">
                                    <span className="text-base label-text">First Name</span>
                                </label>
                                <input id='firstname' type="text" placeholder="First Name" className="w-full input input-bordered input-primary"
                                    value={firstname}
                                    onChange={e => setfirstname(e.target.value)}
                                />
                            </div>
                            <div className='md:w-1/2'>
                                <label className="label">
                                    <span className="text-base label-text">Last Name</span>
                                </label>
                                <input id='lastname' type="text" placeholder=" Last Name" className="w-full input input-bordered input-primary"
                                    value={lastname}
                                    onChange={e => setlastname(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Phone</span>
                            </label>
                            <input id='phone' type="text" placeholder="Phone" className="w-full input input-bordered input-primary"
                                value={phone}
                                onChange={e => setphone(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input id='email' type="text" placeholder="Email Address" className="w-full input input-bordered input-primary"
                                value={email}
                                onChange={e => setemail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input id='password' type="password" placeholder="Enter Password"
                                className="w-full input input-bordered input-primary"
                                value={password}
                                onChange={e => setpassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button className="btn btn-block btn-primary">Add User</button>
                        </div>
                       
                    </form>
            
            
        </div>
    </div>
    
  )
}

export default AddUser

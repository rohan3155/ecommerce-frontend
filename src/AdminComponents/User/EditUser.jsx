import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const { id } = useParams();
//   console.log(id)
  const body = {
    "_id": id
}
  const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])


    const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const  response = await axios.post('http://localhost:3155/Admin/viewUser',body)
            setUData(response.data);
            console.log(response.data)
            
            setfirstname(response.data[0].firstname);
            setlastname(response.data[0].lastname);
            setphone(response.data[0].phone);
            setemail(response.data[0].email);
            setpassword(response.data[0].password);
            
          
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
    data:{firstname, lastname, phone, email, password},
}

      try {
          await axios.post('http://localhost:3155/Admin/updateUser', body).then(res => {

              if (res.data === " ") {

                  history(`/admin/EditUser`)
                  setTimeout(() => {
                    // e.preventDefault();
                    location. reload()
                }, 800);
              } else if (res.data.response === "Succesfully Updated User") {
                  console.log(res.data)
                  console.log(res.data.result)
                      history("/admin/viewuser")
              }
          })
      } catch (error) {
          console.log(error)
      }

     
  }





  return (
   
     <div className="flex flex-col justify-center w-full px-4 py-4 overflow-hidden">
     
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl 2xl:max-w-4xl">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Update User</h1>
            <Link to={'/admin/viewuser'}><button className='btn btn-success'> ←Go Back</button></Link>
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
                                maxLength="10" pattern="\d{10}" title="Please enter exactly 10 digits" 
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
                                readOnly
                            />
                        </div>

                        <div>
                            <button className="btn btn-block btn-primary">Update User</button>
                        </div>
                       
                    </form>
            
            
        </div>
    </div>
  
  )
}

export default EditUser

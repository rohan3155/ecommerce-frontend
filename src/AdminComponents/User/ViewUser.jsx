import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const ViewUser = () => {

    const [loading, setLoading] = useState(true);
    const [UData, setUData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const  response = await axios.post('https://ecommerce-backend-556q.onrender.com/Admin/viewUser')
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
    

    return (
    
            <div className="w-full overflow-scroll pt-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}

                        {!loading && (
                            <>

                                {UData.map((item, key, index) => (
                                    <tr key={key} >
                                        <th>{key + 1}</th>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td className=''>
                                            <div className="join join-horizontal lg:join-horizontal">
                                                <Link to={`/admin/EditUser/${item._id}`} onClick={()=>console.log(item._id)}>
                                                    <button className="btn join-item"><i className="fa-sharp fa-solid fa-pen-to-square"></i></button></Link>
                                                    <Link to={`/admin/DeleteUser/${item._id}`} onClick={()=>console.log(item._id)}><button className="btn join-item"><i className="text-red-500 fa-solid fa-trash"></i></button></Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}



                    </tbody>
                </table>
            </div>
   
    )
}

export default ViewUser

import React, { useEffect, useReducer, useState } from 'react'

import { Link, Route, Routes, useParams } from 'react-router-dom';
// import Welcome from './Welcome';
import DrawerContent from './DrawerContent';

// const reducer =(state,action) =>{
//     if (action.type==="adduser") return (<AddUser/>);
//     if (action.type==="viewuser") return (<ViewUser/>);
//     return new Error();
// }

const SideBar = () => {
    // const location = useLocation();
    // const initialState =<Welcome/>;
    // const [state,dispatch] = useReducer(reducer,initialState);
    // localStorage.setItem("state",state.type.name)
    // useEffect(() => {
    //   return () => {
    //     const getstate = localStorage.getItem("state");
    // console.log(getstate)
    //   };
    // }, [state])
    const {section} = useParams();
    console.log(section)
    
 
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <DrawerContent section={section}/>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>User</li>
                        <ul>
                            <li><Link to={'/admin/adduser'} >Add User</Link></li>
                            <li><Link to={'/admin/viewuser'} >View User</Link></li>
                           
                        </ul>
                        <li>Product</li>
                        <ul>
                            <li><Link to={'/admin/addProduct'} >Add Product</Link></li>
                            <li><Link to={'/admin/viewProduct'} >View Product</Link></li>
                           
                        </ul>
                        <li>Category</li>
                        <ul>
                            <li><Link to={'/admin/addcategory'} >Add Category</Link></li>
                            <li><Link to={'/admin/viewcategory'} >View Category</Link></li>
                           
                        </ul>
                        <li>SubCategory</li>
                        <ul>
                            <li><Link to={'/admin/addsubcategory'} >Add SubCategory</Link></li>
                            <li><Link to={'/admin/viewsubcategory'} >View SubCategory</Link></li>
                           
                        </ul>
                        <li>Order</li>
                        <ul>
                            <li><Link to={'/admin/viewuser'} >View Order</Link></li>
                           
                        </ul>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SideBar

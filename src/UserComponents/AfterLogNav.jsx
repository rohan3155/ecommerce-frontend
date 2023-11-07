import React from 'react'
import human from '../assets/img/human.jpg'

import { checkCookie, getCookie, isCookie } from '../cookiechecker'
import { Link, useNavigate } from 'react-router-dom'
import { ModeToggle } from '../ModeToggle'
import NavOptions from '../NavOptions'
import UNav from './UNav'
const AfterLogNav = (props) => {
//   const history =   useNavigate();



    function deletecookie() {
        let alpha = getCookie();
        let gaama = checkCookie();
        console.log("alpha" + alpha)
        console.log("gaama" + gaama)
      
        if (gaama == true && gaama != undefined) {
          document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          localStorage.removeItem("name");
          localStorage.removeItem("Uid");
          localStorage.removeItem("cartLength");
          localStorage.removeItem("total");
        //   console.log(document.cookie)
        setTimeout(() => {
            // e.preventDefault();
            location. reload()
        }, 800);

        }
      } 
      let width = window.innerWidth;
      console.log(width)

      const cartSize = localStorage.getItem("cartLength");
      const total = localStorage.getItem("total");
    return (
       <>
       {
        isCookie ? (
            <div>
            <div className="navbar bg-base-100">
            
            <div className="justify-between flex-1">
                <NavOptions/>
                {width>768 ? <a className="text-xl normal-case btn btn-ghost">Welcome back, {props.name}</a>:""}
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cartSize}</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="z-30 mt-3 shadow card card-compact dropdown-content w-52 bg-base-100">
                        <div className="card-body">
                            <span className="text-lg font-bold">{cartSize} Items</span>
                            <span className="text-info">Subtotal: ₹{total}</span>
                            <Link to={'/viewCart'}>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={human} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       
                        <li><Link to={"/"} onClick={deletecookie}>Logout</Link></li>
                    </ul>
                </div>
            </div>
            <ModeToggle/>
        </div>
            </div>
        ):(
            <div>
            <UNav/>
            </div>
        )
       }
       </>
    )
}

export default AfterLogNav
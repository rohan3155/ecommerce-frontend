// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryDropdown from './CategoryDropdown'

const NavOptions = () => {
   
    
    return (
        <div className=  'flex gap-8 navbar'>
        
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li>
                            <a>Category</a>
                            <ul className="p-2">
                            
                                <li><a>Men</a></li>
                                <li><a>Women</a></li>
                            </ul>
                        </li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to=''>About</Link></li>
                        <li><Link to=''>Contact Us</Link></li>
                    </ul>
                </div>
                <Link to={"/"} className="text-xl normal-case btn btn-ghost">Bhatia Textile</Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="z-30 px-1 menu menu-horizontal">
                    <li><Link to='/'>Home</Link></li>
                   <CategoryDropdown/>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavOptions

import React from 'react'
import { ModeToggle } from '../ModeToggle'
import NavOptions from '../NavOptions'
import { Link } from 'react-router-dom'
import ViewCategory from '../AdminComponents/Category/ViewCategory'

const UNav = () => {
    
  return (
    <div className="navbar bg-base-100" >
    <NavOptions/>
    <div className="flex gap-4 space-x-3 navbar-end">
    
      <Link to='/Login'  className="hidden btn lg:flex">Login</Link>
      <Link to='/Signup' className="hidden btn lg:flex">Sign up</Link>
      <ModeToggle/>
    </div>
  </div>
  )
}

export default UNav

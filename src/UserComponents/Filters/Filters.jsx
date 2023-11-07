import React from 'react'
import FilterDrawer from './FilterDrawer'
// import CategoryDropdown from '../CategoryDropdown'
import CategoryFIlter from './CategoryFIlter'
import SubCategoryFIlter from './SubCategoryFIlter'
import { useParams } from 'react-router-dom'

const Filters = () => {
  
  const {name,filter} = useParams(); 
  // console.log(name)
  
  console.log(filter)
  return (
    <div className="z-20 drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <label htmlFor="my-drawer-2" className="my-2 btn btn-primary drawer-button lg:hidden"><i className="fa-solid fa-filter"></i></label>
    <FilterDrawer filter={filter}/>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="w-48 h-full p-4 menu bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <CategoryFIlter/>
        <SubCategoryFIlter/>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    
    </div>
  </div>
  )
}

export default Filters

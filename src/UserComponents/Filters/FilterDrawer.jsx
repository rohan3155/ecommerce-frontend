import React from 'react'


import Categories from './Categories'
import Products from '../ProductComponents/Products';
import SubCategories from './SubCategories';

const FilterDrawer = ({filter}) => {
  console.log(filter)
  const handleParams = () =>{
    switch (filter) {

      case undefined:
      return  <Products title={"All Products"}/>
      case "Category":
        return <Categories/>
      case "SubCategory":
        return <SubCategories/>
    
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center drawer-content">
      {handleParams()}    
    </div> 
  )
}

export default FilterDrawer

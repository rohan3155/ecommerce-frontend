import React from 'react'
import ULogin from './UserComponents/ULogin'
import USignup from './UserComponents/USignup'

const UsersComponent = ({section}) => {
    const handleParams = () =>{
        switch (section) {
            
            
            default:
                break;
        }
    }
    return (
        <div className="flex justify-center overflow-scroll drawer-content" >
            {/* Page content here */}
            {
              handleParams()
            }

        </div>
    )
}

export default UsersComponent

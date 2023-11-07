import React from 'react'
import AddUser from './AdminComponents/User/AddUser'
import ViewUser from './AdminComponents/User/ViewUser';
import EditUser from './AdminComponents/User/EditUser';
import DeleteUser from './AdminComponents/User/DeleteUser';
import AddSubCategory from './AdminComponents/SubCategory/AddSubCategory';
import ViewSubCategory from './AdminComponents/SubCategory/ViewSubCategory';
import EditSubCategory from './AdminComponents/SubCategory/EditSubCategory';
import DeleteSubCategory from './AdminComponents/SubCategory/DeleteSubCategory';
import AddCategory from './AdminComponents/Category/AddCategory';
import ViewCategory from './AdminComponents/Category/ViewCategory';
import EditCategory from './AdminComponents/Category/EditCategory';
import DeleteCategory from './AdminComponents/Category/DeleteCategory';
import AddProduct from './AdminComponents/Products/AddProduct';
import ViewProduct from './AdminComponents/Products/ViewProduct';
import EditProduct from './AdminComponents/Products/EditProduct';
import DeleteProduct from './AdminComponents/Products/DeleteProduct';
// import BarChart from './Barchart';
// import AddImage from './AdminComponents/Images/AddImage';
import ImageUpload from './AdminComponents/Images/AddImage';
import ViewImage from './AdminComponents/Images/ViewImage';
import ImageUploadForm from './AdminComponents/Images/AddImage';
import ImageViewer from './AdminComponents/Images/ViewImage';
const DrawerContent = ({ section }) => {
    const handleParams = () => {
        switch (section) {
            
            
            case "adduser":
                return <AddUser />

            case "viewuser":
                return <ViewUser />
            case "EditUser":
                return <EditUser />
            case "DeleteUser":
                return <DeleteUser />


            case "addsubcategory":
                return <AddSubCategory />
            case "viewsubcategory":
                return <ViewSubCategory />
            case "editsubcategory":
                return <EditSubCategory />
            case "deletesubcategory":
                return <DeleteSubCategory />

            case "addcategory":
                return <AddCategory />
            case "viewcategory":
                return <ViewCategory />
            case "editcategory":
                return <EditCategory />
            case "deletecategory":
                return <DeleteCategory />

            case "addProduct":
                return <AddProduct />
            case "viewProduct":
                return <ViewProduct />
            case "EditProduct":
                return <EditProduct />
            case "DeleteProduct":
                return <DeleteProduct />

            case "addimage":
                return <ImageUploadForm/>
            case "viewImage":
                return <ImageViewer/>
            

            default:
                break;
        }
    }
    return (
        <div className="flex justify-center overflow-scroll md:overflow-hidden drawer-content" >
            {/* Page content here */}
            {
                handleParams()
            }
        </div>
    )
}

export default DrawerContent

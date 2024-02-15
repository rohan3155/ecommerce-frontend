import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CartCard = ({name , brand , price ,quantity , cId}) => {
   
    const history = useNavigate();
const [id, setid] = useState(null)
console.log(id)
    const body ={
        "_id":id
    }
    useEffect(() => {
        if (id !== null) {
          handleDelete();
        }
      }, [id]);
      
        const handleDelete = async () => {
         
          try {
            const response = await axios.post(
              "https://ecommerce-backend-556q.onrender.com/User/removefromcart",
              body,
              { headers: { "Content-Type": "application/json" } }
            );
            // setUData(response.data);
            console.log(response.data);
            if (response.data.response === " ") {

               history("/viewCart")
              
            } else if (response.data.response === "cart item removed") {
                console.log(response.data)
                console.log(response.data.result)
               setTimeout(() => {
                location.reload();
               }, 400);
            }
          } catch (error) {
            console.error(error.message);
          }
         
        };
        const handleMultipleEvents = () => {
            setid(cId);
            setTimeout(() => {
                handleDelete();
            }, 500);
          };
       
    return (
        <li className="flex items-center gap-4">
            <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="object-cover w-16 h-16 rounded"
            />

            <div>
                <h3 className="text-sm ">{name}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div className='text-base'>
                        <dt className="inline">Brand:</dt>
                        <dd className="inline">{brand}</dd>
                    </div>

                    <div className='text-lg'>
                        <dt className="inline">Price:</dt>
                        <dd className="inline ">{price}</dd>
                    </div>
                </dl>
            </div>

            <div className="flex items-center justify-end flex-1 gap-2">
                <form>
                    <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
                    <input
                        type="number"
                        min={1}
                        readOnly
                        value={quantity}
                        id="Line1Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                   
                </form>

                <button  onClick={handleMultipleEvents} className="transition hover:text-red-600">
                    <span className="sr-only" >Remove item</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                        
                        
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default CartCard

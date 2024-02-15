import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
import CartCard from "./CartCard";
import axios from "axios";
import { isCookie } from "../../cookiechecker";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const [loading, setLoading] = useState(true);
  const [UData, setUData] = useState([]);
  // const [Productname, setProductname] = useState("")
  // const [Brandname, setBrandname] = useState("")
  // const [Price, setPrice] = useState("")
  const [Total, setTotal] = useState(0);
  const UserId = localStorage.getItem("Uid");
  console.log(UserId);
  console.log(isCookie)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const body ={
          UserId:UserId
        }
        const response = await axios.post(
          "https://ecommerce-backend-556q.onrender.com/User/viewcart",
          body
        );
        setUData(response.data);
        console.log(response)
        console.log(response.data);
        let ans = 0;
        response.data.forEach(element => {
          ans += Number(element.productId.SellingPrice*element.quantity)
        });
        setTotal(ans);
        localStorage.setItem("total",ans);
      } catch (error) {
        console.error(error.message);
      }
      // console.log(UData)
      setLoading(false);
    };
    fetchData();
    // return(response);
  }, []);
  localStorage.setItem("cartLength",UData.length);

  return (
    <section>
    
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="text-center">
            <h1 className="text-xl font-bold  sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {!loading && (
                <>
                  {UData.map((item, key, index) => (
                    
                      
                      <CartCard
                      key={key}
                        name={item.productId.ProductName}
                        brand={item.productId.BrandName}
                        price={item.productId.SellingPrice}
                        quantity={item.quantity}
                        cId={item._id}
                      />
                     
                      
                    
                  ))}
                </>
              )}
            </ul>

            <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>₹{Total}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                   {/* <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                  <p className="text-xs whitespace-nowrap">
                      2 Discounts Applied
                  </p>
                  </span>*/}
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/checkout/checkoutformcart"
                    className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default ViewCart ;

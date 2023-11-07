import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const history = useNavigate();
  // console.log(id);
  const [loading, setLoading] = useState(true);
  const [UData, setUData] = useState([]);
  const [value, setvalue] = useState(1)
  const handleIncrement = () =>{
      setvalue(()=>value+1)
  }
  const handleDecrement = () =>{
     if(value>1){
      setvalue(()=>value-1)
     }
  }
  const body = {
    _id: id,
  };

     const [imageName, setImageName] = useState('');
    const [imageData, setImageData] = useState(null);
    // const id = useParams();
    // console.log("id", id)
    useEffect(() => {
        // Replace 'your_encrypted_file_name' with the actual encrypted file name
        // const encryptedFileName = 'bdcb467f022461af7193b564c318ce64';
        const productId = '64e2f3490acf179288d7acc2';
        axios.get(`http://localhost:3155/Admin/viewimage/${id}`, {
            responseType: 'arraybuffer',
        })
            .then((response) => {
                console.log(response.data)
                const blob = new Blob([response.data], { type: 'image/jpeg' });
                const url = URL.createObjectURL(blob);
                setImageData(url);
                console.log(url)
            })
            .catch((error) => {
                console.error('Image retrieval failed:', error);
            });

    }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3155/Admin/viewProduct",
          body
        );
        setUData(response.data);
        console.log(response.data);
       
        

      } catch (error) {
        console.error(error.message);
      }
      // console.log(UData)
      setLoading(false);
    };
    fetchData();
    // return(response);
  }, []);

  const UserId =localStorage.getItem("Uid");
  const productId =id;
  const handleCart = async () => {
         const body ={
          UserId:UserId,
          productId:productId,
          quantity:value,
         }
    try {
        
        const  response = await axios.post('http://localhost:3155/User/addtocart',body)
        
        console.log(response.data)
        
        
        if(response.data === "New item  added to the cart"){
         history("/viewCart")
         setTimeout(() => {
          location.reload()
         }, 200);
         }
        
      
    } catch (error) {
        console.log(error.message);
    }
    // console.log(UData)
}
  return (
    <section>
      {!loading && (
        <>
          {UData.map((item, key, index) => (
            <div className="relative max-w-screen-xl px-4 py-8 mx-auto" key={key}>
              <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-20 h-1/2">
                  <img src={imageData} alt="Shoes" className="w-full   rounded-lg " />
                  {/* <div className="flex gap-8 ">
                  <div className="flex-1 ">
                  <img src={mbimage1} alt="Shoes" className="w-full  h-1/2 rounded-lg " />
                  </div>
                  <div className="flex-1">
                  <img src={mbimage1} alt="Shoes" className="w-full  h-1/2 rounded-lg " />
                  </div>
                  </div> */}
                </div>

                <div className="sticky top-0">
                  <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                    {item.CategoryName.CategoryName}
                  </strong>
                  <div className="flex justify-between mt-8">
                    <div className="max-w-[35ch] space-y-2">
                      <h1 className="text-xl font-bold sm:text-2xl"></h1>

                      <p className="text-sm">{item.ProductName}</p>
                      <strong className="rounded-md border border-emerald-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-emerald-600">
                      {item.BrandName}
                      </strong>
                    </div>

                    <p className="text-lg font-bold">
                      ₹{Number(item.SellingPrice)}
                    </p>
                  </div>

                  <p className="text-lg font-bold" id="foralert"></p>

                  <div className="mt-4">
                    <div className="prose max-w-none">
                      <p></p>
                    </div>

                    <p>{item.Description}</p>
                  </div>

                  <form className="mt-8">
                    <fieldset>
                      <legend className="mb-1 text-sm font-medium">
                        Color
                      </legend>

                      <div className="flex flex-wrap gap-1">
                        <label htmlFor="color_tt" className="cursor-pointer">
                          <input
                            type="radio"
                            name="color"
                            id="color_tt"
                            className="sr-only peer"
                          />

                          <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            Texas Tea
                          </span>
                        </label>

                        <label htmlFor="color_fr" className="cursor-pointer">
                          <input
                            type="radio"
                            name="color"
                            id="color_fr"
                            className="sr-only peer"
                          />

                          <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            Fiesta Red
                          </span>
                        </label>

                        <label htmlFor="color_cb" className="cursor-pointer">
                          <input
                            type="radio"
                            name="color"
                            id="color_cb"
                            className="sr-only peer"
                          />

                          <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            Cobalt Blue
                          </span>
                        </label>
                      </div>
                    </fieldset>

                    <fieldset className="mt-4">
                      <legend className="mb-1 text-sm font-medium">Size</legend>

                      <div className="flex flex-wrap gap-1">
                        <label htmlFor="size_xs" className="cursor-pointer">
                          <input
                            type="radio"
                            name="size"
                            id="size_xs"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            XS
                          </span>
                        </label>

                        <label htmlFor="size_s" className="cursor-pointer">
                          <input
                            type="radio"
                            name="size"
                            id="size_s"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            S
                          </span>
                        </label>

                        <label htmlFor="size_m" className="cursor-pointer">
                          <input
                            type="radio"
                            name="size"
                            id="size_m"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            M
                          </span>
                        </label>

                        <label htmlFor="size_l" className="cursor-pointer">
                          <input
                            type="radio"
                            name="size"
                            id="size_l"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            L
                          </span>
                        </label>

                        <label htmlFor="size_xl" className="cursor-pointer">
                          <input
                            type="radio"
                            name="size"
                            id="size_xl"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            XL
                          </span>
                        </label>
                      </div>
                    </fieldset>

                    <div className="flex gap-4 mt-8">
                      <div>
                      
                      <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
                      <button
                          type="button"
                          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                          onClick={handleDecrement}
                      >
                          &minus;
                      </button>
                      <input
                      min={1}
                          type="number"
                          readOnly
                          value={value}
                          id="Line1Qty"
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <button
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      onClick={handleIncrement}
                    >
                    +
                    </button>
                 
                      </div>

                      <button
                        type="button"
                        className="block px-5 py-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                        onClick={handleCart}
                      >
                        Add to Cart
                      </button>
                      <Link to={`/checkout/${item._id}`}>
                      <button
                        type="button"
                        className="block px-5 py-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                      >
                        Buy Now
                      </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default ProductDetail;

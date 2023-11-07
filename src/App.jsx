import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Form } from "react-router-dom";
import { AcheckCookie, AgetCookie } from './cookiechecker';
import Login from './Login';
// import Dashboard from './Dashboard';
import Navbar from './AdminComponents/Navbar';
import SideBar from './SideBar';
import UNav from './UserComponents/UNav';
import AfterLogNav from './UserComponents/AfterLogNav';
import ULogin from './UserComponents/ULogin';
import USignup from './UserComponents/USignup';
import Crousel from './UserComponents/Crousel';
import Products from './UserComponents/ProductComponents/Products';
import Footer from './UserComponents/Footer';
import TrendingProducts from './UserComponents/ProductComponents/TrendingProducts';
import FullProduct from './UserComponents/FullProduct';
import About from './UserComponents/About';
import Contact from './UserComponents/Contact';
import Category from './UserComponents/Category';
import Filters from './UserComponents/Filters/Filters';
import ViewCart from './UserComponents/Cart/ViewCart';
import ProductDetail from './UserComponents/ProductComponents/ProductDetail';
import Checkout from './UserComponents/Checkout/Checkout';
import CheckoutFromCart from './UserComponents/Checkout/CheckoutFromCart';

AgetCookie(document.cookie)
export let isACookie = AcheckCookie()
console.log(isACookie)
const fname = localStorage.getItem("name");
console.log(localStorage.getItem("name"))
const Adminname = localStorage.getItem("Adminname");
console.log(localStorage.getItem("Adminname"))
function App() {


  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <div>
        <AfterLogNav name={fname}/>
        <Crousel/>
        <TrendingProducts  title={"Trending Products"}/>
        <Footer/>
        </div>
      } />
      <Route path='/category/:id' element={
        <div>
        <AfterLogNav name={fname}/>
        <Category/>
        <Footer/>
        </div>
      } />
      <Route path='/addtocart' element={
        <div>
        <AfterLogNav name={fname}/>
        <ViewCart/>
        <Footer/>
        </div>
      } />
      <Route path='/viewCart' element={
        <div>
        
        <AfterLogNav name={fname}/>
        <ViewCart/>
        <Footer/>
        </div>
      } />
      <Route path='/addtocart/:id' element={
        <div>
        <AfterLogNav name={fname}/>
        <ViewCart/>
        <Footer/>
        </div>
      } />
      <Route path='/about' element={
        <div>
        <AfterLogNav name={fname}/>
        <About/>
        <Footer/>
        </div>
      } />
      <Route path='/contactus' element={
        <div>
        <AfterLogNav name={fname}/>
        <Contact/>
        <Footer/>
        </div>
      } />
      <Route path='/products' element={
        <div>
        <AfterLogNav name={fname}/>
        <Filters/>
        <Footer/>
        </div>
      } />
      <Route path='/products/:filter/:name' element={
        <div>
        <AfterLogNav name={fname}/>
        <Filters/>
        <Footer/>
        </div>
      } />
      <Route path='/products/:id' element={
        <div>
        <AfterLogNav name={fname}/>
       <ProductDetail/>
        <Footer/>
        </div>
      } />
      <Route path='/checkout/:id' element={
        <div>
        <AfterLogNav name={fname}/>
       <Checkout/>
        <Footer/>
        </div>
      } />
      <Route path='/checkout/checkoutformcart' element={
        <div>
        <AfterLogNav name={fname}/>
       <CheckoutFromCart/>
        <Footer/>
        </div>
      } />
      <Route path='/Login' element={
        <div>
        <ULogin/>
        </div>
      } />
      <Route path='/Signup' element={
        <div>
        <USignup/>
        </div>
      } />
      <Route path='/admin' element={
        <div>
        {isACookie?(
          <div>
          <Navbar adminname={Adminname}/>
          <SideBar/>
          </div>
        ):<Login/>}
        </div>
      } />
      <Route path='/admin/:section' element={
        <div>
        {isACookie?(
          <div>
          <Navbar adminname={Adminname}/>
          <SideBar/>
          </div>
        ):<Login/>}
        </div>
      } />
      <Route path='/admin/:section/:id' element={
        <div>
        {isACookie?(
          <div>
          <Navbar adminname={Adminname}/>
          <SideBar/>
          </div>
        ):<Login/>}
        </div>
      } />
     
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App

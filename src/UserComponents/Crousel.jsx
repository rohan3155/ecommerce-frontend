import React from 'react'
import image1 from '../assets/img/image1.jpg'
import image2 from '../assets/img/image2.jpg'
import image3 from '../assets/img/image3.jpg'
import image4 from '../assets/img/image4.jpg'
import image5 from '../assets/img/image5.jpg'
import mbimage1 from '../assets/img/mbimage1.jpg'
import mbimage2 from '../assets/img/mbimage2.jpg'
import mbimage3 from '../assets/img/mbimage3.jpg'
import mbimage4 from '../assets/img/mbimage4.jpg'
import mbimage5 from '../assets/img/mbimage5.jpg'
const Crousel = () => {
    let width = window.innerWidth;
    console.log(width)
    return (
        <div>
            <div className="w-full carousel h-[70vh] cursor-pointer">
                <div id="item1" className="w-full carousel-item">
                    <img src={width>768?image1:mbimage1} className="w-full " />
                </div>
                <div id="item2" className="w-full carousel-item">
                    <img src={width>768?image2:mbimage2} className="w-full " />
                </div>
                <div id="item3" className="w-full carousel-item">
                    <img src={width>768?image3:mbimage3} className="w-full " />
                </div>
                <div id="item4" className="w-full carousel-item">
                    <img src={width>768?image4:mbimage4} className="w-full " />
                </div>
                <div id="item5" className="w-full carousel-item">
                    <img src={width>768?image5:mbimage5} className="w-full " />
                </div>
            </div>
            <div className="flex justify-center w-full gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    )
}

export default Crousel

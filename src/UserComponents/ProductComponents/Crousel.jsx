import React from 'react'
import image1 from '../../assets/img/image1.jpg'
import image2 from '../../assets/img/image2.jpg'
import image3 from '../../assets/img/image3.jpg'
import image4 from '../../assets/img/image4.jpg'
import image5 from '../../assets/img/image5.jpg'
const Crousel = () => {
    return (
        <div className="gap-8 carousel ">
            <div className="carousel-item">
                <img src={image1} alt="Burger" className='h-[40vh] w-full' />
            </div>
            <div className="carousel-item">
                <img src={image2} alt="Burger" className='h-[40vh] w-full' />
            </div>
            <div className="carousel-item">
                <img src={image3} alt="Burger" className='h-[40vh] w-full' />
            </div>
            <div className="carousel-item">
                <img src={image4}  alt="Burger" className='h-[40vh] w-full' />
            </div>
            <div className="carousel-item">
                <img src={image5} alt="Burger" className='h-[40vh] w-full' />
            </div>
        </div>
    )
}

export default Crousel

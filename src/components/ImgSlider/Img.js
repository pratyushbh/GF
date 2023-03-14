import React from 'react'
import Img1 from '../../assets/Img1.jpeg';
import Img2 from '../../assets/Img2.jpeg';
import Img3 from '../../assets/Img3.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Img.css"

function Img() {
  return (
    <div className='Img'>
         <Carousel className='main-Slider'>
                <div>
                    <img src={Img1} />
                </div>
                <div>
                    <img src={Img2} />
                </div>
                <div>
                    <img src={Img3} />
                </div>
            </Carousel>
    </div>
  )
}

export default Img
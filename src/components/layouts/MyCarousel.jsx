import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img2 from '../../assets/2.jpg'

const MyCarousel = () => {
  return (
    <Carousel>
                <div>
                    <img src="1.jpg" alt="" srcset="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}

export default MyCarousel

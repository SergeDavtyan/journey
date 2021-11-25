import React from 'react';
import "./Carousel.css"

import Slider from "react-slick";


function Carousel({ arrowPos, images }) {

    const settings = {
        infinite: true,
        slidesToShow: 1
    };

    return (
        <div className={"c " + arrowPos}>

            <Slider {...settings}>
                {
                    images.map((e, index) => {
                        return (
                            <div key={index}>
                                <img src={e} alt="Slider" />
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}

export default Carousel

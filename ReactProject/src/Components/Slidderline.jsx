import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidderline = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true
      };
  return (
    <div className="slider-container"   style={{backgroundColor:"black",color:"white",gap:"40px",height:"50px",alignItems:"center",marginTop:"30px",textAlign:"center",alignContent:"center"}}>
    <Slider {...settings}>
    <div><p>WELCOME TO BLUEFLY : Luxury brands at discounted prices</p>
    </div>
    <div>
    <p>FREE STANDARD SHIPPING AND HANDLING</p>
    </div>
    </Slider>
    </div>
  )
}

export default Slidderline
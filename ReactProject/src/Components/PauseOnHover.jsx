import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@chakra-ui/react';

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container"  >
      <Slider {...settings}>
        <Box height={"500px"} textAlign={"center"} alignItems={"center"} alignContent={"center"} backgroundSize={" 1000px"} backgroundPosition={"center"} backgroundImage={"https://blog.theluxurycloset.com/wp-content/uploads/2020/11/shutterstock_1519162370-680x400.jpg"} >
         
          <h1 style={{fontFamily:"monospace", fontSize:"60px"}}>WORLD OF VALENTINO</h1>
          <h3 style={{fontSize:"20px"}}>Shop Handbags, Shoes, Apparel & More</h3>     <br/>
          <button style={{backgroundColor:"white", color:"black", width:"150px" , height:"50px"}}>SHOP VALENTINO</button>
        </Box>


       <Box  height={"490px"} textAlign={"center"} alignItems={"center"} alignContent={"center"} backgroundSize={" 1000px"} backgroundPosition={"center"} backgroundImage={"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F11%2FFIBottega_Veneta_PS23_Vogue_066_Detail.jpg?w=1080&cbr=1&q=90&fit=max"}>
       <h1 style={{fontFamily:"monospace", fontSize:"60px", color:"white"}}>BOTTEGA VENETA</h1>
       <h3 style={{color:"white" ,fontSize:"20px"}}>UNSURPASSED CRAFTMANSHIP & THE SIGNATURE WOVEN LEATHER</h3>     <br/>
       <button style={{backgroundColor:"white", color:"black", width:"150px" , height:"50px"}}>SHOP NOW</button>
       </Box>
         
       <Box  height={"490px"} textAlign={"center"} alignItems={"center"} alignContent={"center"} backgroundSize={" 1000px"} backgroundPosition={"center"} backgroundImage={"https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/w/6/w/8-ocm-062-01-8-off-limits-white-navy-original-imagmv8ekheg6nxz.jpeg?q=90&crop=false"}>
       <h1 style={{fontFamily:"monospace", fontSize:"60px", color:"black"}}>OFF-WHITE SHOES</h1>
       <h3 style={{color:"black" ,fontSize:"20px"} }>A TOP FASHION BRAND THAT CULTIVATES THE MOST ELEVATED DESIGNS OF STYLES</h3>     <br/>
       <button style={{backgroundColor:"black", color:"white", width:"150px" , height:"50px"}}>SHOP NOW</button>
       </Box>
         
       <Box  height={"490px"} textAlign={"center"} alignItems={"center"} alignContent={"center"} backgroundSize={" 1000px"} backgroundPosition={"center"} backgroundImage={"https://editorialist.com/thumbnail/wp-content/uploads/2022/06/Editorialist2023_Fashion_Best-Gucci-Bags_Hero.webp?width=825&quality=60"}>
       <h1 style={{fontFamily:"monospace", fontSize:"60px", color:"white"}}>LUXE HANDBAGS</h1>
       <h3 style={{color:"white" ,fontSize:"20px"}}>Styles from Gucci, Prada, Saint Laurent, Bottega Veneta, Fendi & more</h3>     <br/>
       <button style={{backgroundColor:"white", color:"black", width:"150px" , height:"50px"}}>SHOP NOW</button>
       </Box>
         </Slider>
     </div>


  );
}

export default PauseOnHover;

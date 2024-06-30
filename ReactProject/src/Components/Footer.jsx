import { Box, Flex, VStack, Button, Input } from "@chakra-ui/react";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";
const Footer = () => {
  return (
    <div  style={{backgroundColor:"rgb(230,230,230)"}}>
      <Flex>
        <VStack p={10} w={250} align="flex-start">
          <p style={{ fontSize: 20 }}>ABOUT US</p> <hr />
          <p>Contact Us</p>
          <p>Frequently Asked Questions</p>
          <p>Shipping & Returns</p>
          <p>Pre-Owned Guide</p>
          <p>Sell on Bluefly</p>
        </VStack>

        <VStack p={20} w={350} align="flex-start">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Do not sell my personal information</p>
          <p>Shop Pay Installments</p>
        </VStack>

        <VStack  p={10} w={350} align="flex-start">
          <p style={{ fontSize: 20 }}> SIGN UP AND SAVE </p> <hr />
          <p> Subscribe to get exclusive offers on designer brands</p>
          <Input style={{backgroundColor:"white",borderRadius:"0px"}} placeholder="Enter your email" size="md" />
           <button style={{backgroundColor:"black", width:"275px" ,color:"white" ,height:"40px"}}>Subscribe</button>
          <Flex gap={5}>
            <p> <GrInstagram  size={25}/></p>
            <p><ImFacebook size={25} /></p>
            </Flex> <br/> 
            <img src="https://www.bluefly.com/cdn/shop/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" alt="logo1" />
           
        </VStack>
     </Flex>
      <p style={{textAlign:"center"}}>© 2024 Bluefly BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;

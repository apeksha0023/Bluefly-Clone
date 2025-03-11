import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div>
      <Box pt="20px" px={{ base: 2, md: 10 }}>
        <Flex justify="center">
          <HStack
          
          fontSize={{ base: "14px", md: "17px" }}
          spacing={{ base: 4, md: 10 }}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          overflowX={{ base: "auto", md: "visible" }}
          whiteSpace="nowrap"
         
          >
            <Link to="/clothing">  <p>CLOTHING</p></Link> 
            <Link to="/shoes"> <p>SHOES</p></Link> 
            <Link to="/handbags"><p>HANDBAGS</p></Link>
            <Link to="/designers"><p>DESIGNERS</p></Link> 
            <Link to="/sunglasses"> <p>SUNGLASSES</p></Link> 
            <Link to="/jewelrywatches"> <p>JEWELRY & WATCHES</p></Link> 
            <Link to="/accessories"><p>ACCESSORIES</p></Link>
             <Link to="/home"> <p>HOME</p></Link> 
            <Link to="/under$50">  <p>UNDER $50</p></Link>  
            <Link to="/homebeauty"><p>CLEARANCE</p></Link> 
          </HStack>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar1;




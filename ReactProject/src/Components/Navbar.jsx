import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Box p={3}>
        <Flex justifyContent="end" gap={400} alignItems="Center">
          <Flex >
         <Link to="/"><img style={{width:"200px",alignItems:"center"}}
              src="https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141"
              alt="logo"
            /></Link>   
          </Flex>
          <Flex gap={3} alignItems="Center">
           <Flex>< CiSearch size={25} /><p>Search</p></Flex>


           <Link to="/login"><p>  <IoMdContact size={25} />{" "} </p></Link> 

         <Link to="/fav"> <p> <CiHeart size={25} /> </p></Link>  


            <p> <LiaShoppingBagSolid size={25} /> </p>
          </Flex>
        </Flex>
      </Box>
      <Box></Box>
    </div>
  );
};

export default Navbar;

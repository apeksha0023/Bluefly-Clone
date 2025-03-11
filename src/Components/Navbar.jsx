

import { Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box p={3} px={{ base: 4, md: 10 }}>
      <Flex 
        justify="space-between" 
        align="center" 
        wrap="wrap"
      >
        {/* Left icons (for mobile view) */}
        <Flex 
          gap={{ base: 2, md: 4 }} 
          align="center"
          display={{ base: "flex", md: "none" }} // Show only on mobile
        >
          <Link to="/search">
            <IconButton 
              aria-label="Search"
              icon={<CiSearch size={25} />}
              variant="ghost"
            />
          </Link>
        </Flex>

        {/* Centered Logo */}
        <Flex justify="center" flex="1"> 
          <Link to="/">
            <img 
              src="https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141"
              alt="logo"
              style={{ width: "100%", maxWidth: "200px" }} // Fully responsive logo
            />
          </Link>
        </Flex>

        {/* Right icons */}
        <Flex 
          gap={{ base: 2, md: 4 }} 
          align="center"
        >
          <Link to="/login">
            <IconButton 
              aria-label="Login" 
              icon={<IoMdContact size={25} />} 
              variant="ghost"
            />
          </Link>

          <Link to="/fav">
            <IconButton 
              aria-label="Favorites" 
              icon={<CiHeart size={25} />} 
              variant="ghost"
            />
          </Link>

          <Link to="/cart">
            <IconButton 
              aria-label="Cart" 
              icon={<LiaShoppingBagSolid size={25} />} 
              variant="ghost"
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;



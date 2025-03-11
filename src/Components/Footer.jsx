import { Box, Flex, VStack, Button, Input, Text, Image, Divider } from "@chakra-ui/react";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <Box bg="gray.200" py={8} px={{ base: 4, md: 10 }}>
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align={{ base: "center", md: "flex-start" }} 
        justify="space-around"
        wrap="wrap"
        gap={6}
      >
        {/* About Us Section */}
        <VStack p={5} w={{ base: "full", md: "250px" }} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">ABOUT US</Text>
          <Divider />
          {["Contact Us", "Frequently Asked Questions", "Shipping & Returns", "Pre-Owned Guide", "Sell on Bluefly"].map((item, index) => (
            <Text key={index} _hover={{ textDecoration: "underline", cursor: "pointer" }}>{item}</Text>
          ))}
        </VStack>

        {/* Policies Section */}
        <VStack p={5} w={{ base: "full", md: "350px" }} align="flex-start">
          {["Privacy Policy", "Terms & Conditions", "Do not sell my personal information", "Shop Pay Installments"].map((item, index) => (
            <Text key={index} _hover={{ textDecoration: "underline", cursor: "pointer" }}>{item}</Text>
          ))}
        </VStack>

        {/* Sign Up Section */}
        <VStack p={5} w={{ base: "full", md: "350px" }} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">SIGN UP AND SAVE</Text>
          <Divider />
          <Text>Subscribe to get exclusive offers on designer brands</Text>
          <Input bg="white" borderRadius="md" placeholder="Enter your email" size="md" />
          <Button bg="black" color="white" w="full" _hover={{ bg: "gray.800" }}>Subscribe</Button>
          <Flex gap={5} mt={3}>
            <GrInstagram size={25} cursor="pointer" />
            <ImFacebook size={25} cursor="pointer" />
          </Flex>
          <Box mt={3}>
            <Image src="https://www.bluefly.com/cdn/shop/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" alt="Bluefly Logo" w="full" />
          </Box>
        </VStack>
      </Flex>
      
      <Text textAlign="center" mt={5} fontSize="sm">
        © 2024 Bluefly BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.
      </Text>
    </Box>
  );
};

export default Footer;

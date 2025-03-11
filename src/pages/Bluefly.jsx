// import React from "react";
// import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
// import Slidderline from "../Components/Slidderline";
// import PauseOnHover from "../Components/PauseOnHover";

// const categories = [
//   { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_2219891521_ea396544-85ce-43c8-9c8e-5ec5f526ca5b_1380x.jpg?v=1733270241", title: "GEMINI CROSSBODY BAG" },
//   { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_493261045_1380x.jpg?v=1733270652", title: "HILLS" },
//   { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_1292660482_1380x.jpg?v=1733271827", title: "SNEAKERS" },
//   { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_2217545801_45611bf9-55f6-4213-ab9e-64221ba08f59_1380x.jpg?v=1732647879", title: "DRESSES" },
//   { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_2448429607_1380x.jpg?v=1732638825", title: "SUNGLASSES" }
// ];

// const trendingItems = [
//   { img: "https://www.brides.com/thmb/_vMmFZEdhk7OHppN7Keae1U0df4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bri-tier-3-primary-best-amazon-purses-ahuang-037-499fc8bed2f94ec08c0e3b52fd734ca3.jpeg", title: "TRENDING LUXURY STYLES UPTO 80% OFF" },
//   { img: "https://i.ytimg.com/vi/rcDe7nn9vto/maxresdefault.jpg", title: "TRENDING LUXURY DRESSES UPTO 80% OFF" },
//   { img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390381554/RF/IC/RA/5108381/puma-cricket-shoes.png", title: "TRENDING SHOES UPTO 80% OFF" }
// ];

// const Bluefly = () => {
//   return (
//     <Box w="full" px={{ base: 2, sm: 4, md: 6, lg: 8 }} py={4}>
//       <Slidderline />

//       {/* Banner Image */}
//       <Box>
//         <Image
//           width="100%"
//           src="https://www.bluefly.com/cdn/shop/files/4TH_OF_JULY_BANNER_1200X200_a4bf98c3-1402-4d10-ae5a-94bdc8254b1e_1600x.png?v=1719525163"
//           alt="Banner"
//         />
//       </Box>

//       <PauseOnHover />

//       {/* Shop by Category Heading */}
//       <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" textAlign="center" mt={5}>
//         SHOP BY CATEGORY
//       </Text>

//       {/* Category Grid */}
//       <Grid
//         templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" }}
//         gap={5}
//         justifyContent="center"
//         px={{ base: 3, md: 5 }}
//         mt={5}
//       >
//         {categories.map((item, index) => (
//           <Flex 
//             key={index} 
//             direction="column" 
//             align="center" 
//             _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
//           >
//             <Image 
//               src={item.img} 
//               width={{ base: "150px", md: "200px" }}
//               height={{ base: "150px", md: "200px" }}
//               objectFit="cover" 
//               borderRadius="10px" 
//             />
//             <Text fontWeight="bold" mt={2} fontSize={{ base: "sm", md: "md" }} textAlign="center">{item.title}</Text>
//           </Flex>
//         ))}
//       </Grid>

//       <PauseOnHover />

//       {/* Trending Section */}
//       <Flex 
//         wrap="wrap" 
//         justify="center" 
//         gap={6} 
//         mt={10} 
//         px={{ base: "5%", md: "10%" }}
//       >
//         {trendingItems.map((item, index) => (
//           <Flex 
//             key={index} 
//             direction="column" 
//             align="center" 
//             maxW={{ base: "100%", md: "400px" }}
//             _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
//           >
//             <Image 
//               src={item.img} 
//               width="100%" 
//               height={{ base: "200px", md: "300px" }}
//               objectFit="cover" 
//               borderRadius="10px" 
//             />
//             <Text fontWeight="bold" mt={3} fontSize={{ base: "sm", md: "md" }} textAlign="center">{item.title}</Text>
//           </Flex>
//         ))}
//       </Flex>
//     </Box>
//   );
// };

// export default Bluefly;







import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slidderline from "../Components/Slidderline";
import PauseOnHover from "../Components/PauseOnHover";

const categories = [
  { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_2219891521_ea396544-85ce-43c8-9c8e-5ec5f526ca5b_1380x.jpg?v=1733270241", title: "GEMINI CROSSBODY BAG" },
  { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_493261045_1380x.jpg?v=1733270652", title: "HILLS" },
  { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_1292660482_1380x.jpg?v=1733271827", title: "SNEAKERS" },
  { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_2217545801_45611bf9-55f6-4213-ab9e-64221ba08f59_1380x.jpg?v=1732647879", title: "DRESSES" },
  { img: "https://www.bluefly.com/cdn/shop/files/shutterstock_2448429607_1380x.jpg?v=1732638825", title: "SUNGLASSES" }
];

const trendingItems = [
  { img: "https://www.brides.com/thmb/_vMmFZEdhk7OHppN7Keae1U0df4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bri-tier-3-primary-best-amazon-purses-ahuang-037-499fc8bed2f94ec08c0e3b52fd734ca3.jpeg", title: "TRENDING LUXURY STYLES UPTO 80% OFF" },
  { img: "https://i.ytimg.com/vi/rcDe7nn9vto/maxresdefault.jpg", title: "TRENDING LUXURY DRESSES UPTO 80% OFF" },
  { img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390381554/RF/IC/RA/5108381/puma-cricket-shoes.png", title: "TRENDING SHOES UPTO 80% OFF" }
];

const Bluefly = () => {
  return (
    <Box w="full" px={{ base: 2, sm: 4, md: 6, lg: 8 }} py={4}>
      <Slidderline />

      {/* Banner Image */}
      <Box>
        <Image
          width="100%"
          src="https://www.bluefly.com/cdn/shop/files/4TH_OF_JULY_BANNER_1200X200_a4bf98c3-1402-4d10-ae5a-94bdc8254b1e_1600x.png?v=1719525163"
          alt="Banner"
        />
      </Box>

      <PauseOnHover />

      {/* Shop by Category Heading */}
      <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" textAlign="center" mt={5}>
        SHOP BY CATEGORY
      </Text>

      {/* Category Grid */}
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" }}
        gap={5}
        justifyContent="center"
        px={{ base: 3, md: 5 }}
        mt={5}
      >
        {categories.map((item, index) => (
          <Link key={index} to={"/handbags"}>
            <Flex 
              direction="column" 
              align="center" 
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Image 
                src={item.img} 
                width={{ base: "150px", md: "200px" }}
                height={{ base: "150px", md: "200px" }}
                objectFit="cover" 
                borderRadius="10px" 
              />
              <Text fontWeight="bold" mt={2} fontSize={{ base: "sm", md: "md" }} textAlign="center">{item.title}</Text>
            </Flex>
          </Link>
        ))}
      </Grid>

      <PauseOnHover />

      {/* Trending Section */}
      <Flex 
        wrap="wrap" 
        justify="center" 
        gap={6} 
        mt={10} 
        px={{ base: "5%", md: "10%" }}
      >
        {trendingItems.map((item, index) => (
          <Flex 
            key={index} 
            direction="column" 
            align="center" 
            maxW={{ base: "100%", md: "400px" }}
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image 
              src={item.img} 
              width="100%" 
              height={{ base: "200px", md: "300px" }}
              objectFit="cover" 
              borderRadius="10px" 
            />
            <Text fontWeight="bold" mt={3} fontSize={{ base: "sm", md: "md" }} textAlign="center">{item.title}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Bluefly;

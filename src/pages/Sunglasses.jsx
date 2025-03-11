import { Box, Button, Center, Flex, Grid, GridItem, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slidderline from '../Components/Slidderline';

import { sunglasses } from '../Data/sunglasses';

const Sunglasses = () => {
  const [data, setData] = useState(sunglasses);
  const [isSortedAsc, setIsSortedAsc] = useState(true);
    const handleSort = () => {
      const sortedData = [...data].sort((a, b) =>
        isSortedAsc ? a.price - b.price : b.price - a.price
      );
      setData(sortedData);
      setIsSortedAsc(!isSortedAsc); // Toggle sort order
    };

  return (
    <Box>
      <Box>
        <Slidderline />
      </Box>
      <Flex direction={{ base: 'column', lg: 'row' }}>
        
        <Button
                onClick={handleSort}
                mb={4}
                colorScheme="blue"
                margin={5}
              >
                Sort by Price ({isSortedAsc ? 'Ascending' : 'Descending'})
              </Button>
        

        {/* Product Section */}
        <Box flex={1} p={4}>
          <Box textAlign='center'>
            <img
              src='https://cdn.shopify.com/s/files/1/0248/3473/6191/files/4TH_OF_JULY_BANNER_1200X200_a4bf98c3-1402-4d10-ae5a-94bdc8254b1e.png?v=1719525163'
              alt='Banner'
              width='100%'
            />
            <Box mt={4} fontSize='lg' fontWeight='bold'>PRODUCTS</Box>
          </Box>

          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={6}
            p={5}
          >
            {data.map((item) => (
              <GridItem key={item.id}>
                <Box
                  w='100%'
                  p={4}
                  bg='white'
                  border='1px solid rgba(0, 0, 0, 0.1)'
                  borderRadius='md'
                  boxShadow='sm'
                  transition='transform 0.2s'
                  _hover={{ transform: 'scale(1.05)' }}
                >
                  <Link to={`/sunglasses/${item.id}`}>
                    <Flex direction='column' alignItems='center'>
                      <img
                       style={{ width: '100%',height:"300px",objectFit:'cover' }}
                        src={item.img}
                        alt={item.title}
                      />
                      <Box mt={2} fontWeight='600' textAlign='center'height={"50px"}>
                        {item.title}
                      </Box>
                      <Box fontWeight='bold' textAlign='center'>${item.price}</Box>
                    </Flex>
                  </Link>
                </Box>
              </GridItem>
            ))}
          </Grid>

          <Box mt={6} textAlign='center'>
            <img
              src='https://cdn.shopify.com/s/files/1/0254/8878/5498/files/SHOP_PAY_BANNER_Top_1.jpg?v=1684348361'
              alt='Shop Pay Banner'
              width='100%'
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sunglasses;

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { jewelrywatches } from '../Data/jewelrywatches';

const Sjewerlywatches = () => {
  const { Id } = useParams();
  const product = jewelrywatches.find((item) => item.id === parseInt(Id));

  // Add product to localStorage
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (isProductInCart) {
      alert('Product already in cart!');
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    }
  };

  if (!product) {
    return (
      <Box textAlign="center" mt={8}>
        <Text fontSize="2xl" color="red.500">
          Product not found!
        </Text>
      </Box>
    );
  }

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      mt={8}
      px={{ base: 4, md: 8 }}
    >
      {/* Product Image */}
      <Box w={{ base: '100%', md: 400 }} border="2px solid" mb={{ base: 6, md: 0 }}>
        <img src={product.img} alt={product.title} style={{ width: '100%' }} />
      </Box>

      {/* Product Details */}
      <Box textAlign="center" mt={{ base: 6, md: 0 }} ml={{ base: 0, md: 8 }}>
        <Box mt={8} fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500} textAlign="center">
          {product.title}
        </Box>
        
        <Flex
          justifyContent="center"
          gap={5}
          mt={4}
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight={500}
        >
          <Text color="black" >Price:</Text> 
          <Text>${product.price}</Text>
        </Flex>
        
        {/* Add to Cart Button */}
        <Box textAlign="center" mt={6}>
          <Button
            p={2}
            w={{ base: '100%', md: 400 }}
            size="lg"
            backgroundColor="black"
            color="white"
            border="1px solid black"
            onClick={addToCart}
         
          >
            ADD TO BAG
          </Button>
        </Box>

        {/* Product Description */}
        <Box marginTop={8}>
         
          <Text fontSize={{ base: 'sm', md: 'md' }} mt={4}>
            {product?.description}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Sjewerlywatches;
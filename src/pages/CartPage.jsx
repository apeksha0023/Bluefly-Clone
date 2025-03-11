
import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const toast = useToast();
  const navigate = useNavigate();

  // Load cart data and calculate totals
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
    calculateTotals(cartData);
  }, []);

 

  const calculateTotals = (cartData) => {
    const items = cartData.length;
    
    const amount = cartData.reduce((acc, item) => {
      // Convert price safely to a number, handling missing or invalid values
      const price = Number(item.price);
      return acc + (isNaN(price) ? 0 : price);
    }, 0);
  
    setTotalItems(items);
    setTotalAmount(amount);
  };
  


  // Remove an item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotals(updatedCart);
  };

  // Navigate to payment page
  const proceedToPayment = () => {
    if (cart.length === 0) {
      toast({
        title: 'Cart is empty!',
        description: 'Please add items to your cart before proceeding.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      navigate('/payment'); // Navigate to the payment page
    }
  };

  if (cart.length === 0) {
    return (
      <Box textAlign="center" mt={8}>
        <Text fontSize={{ base: 'xl', md: '2xl' }} color="gray.500">
          Your cart is empty!
        </Text>
      </Box>
    );
  }

  return (
    <Box mt={8} padding={{ base: 4, md: 8 }}>
      {/* Display Total Items and Total Amount */}
      <Box mb={8} textAlign="center">
        <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold">
          Total Items: {totalItems}
        </Text>
        <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold" color="green.500">
          Total Amount: ${totalAmount.toFixed(2)}
        </Text>
      </Box>

      {/* Display Cart Items */}
      {cart.map((item) => (
        <Flex
          key={item.id}
          border="1px solid rgba(0, 0, 0, 0.1)"
          p={4}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box mb={{ base: 4, md: 0 }} flexShrink={0}>
            <img
              src={item.img}
              alt={item.title}
              style={{
                maxWidth: '150px', // Adjust the max width for large screens
                width: '100%',     // Allow the image to scale down on smaller screens
                height: 'auto',    // Maintain aspect ratio
              }}
            />
          </Box>
          <Box flex="1" textAlign={{ base: 'center', md: 'left' }} ml={{ md: 4 }}>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>{item.title}</Text>
            <Text fontSize={{ base: 'md', md: 'lg' }}>${item.price}</Text>
          </Box>
          <Button
            colorScheme="red"
            onClick={() => removeFromCart(item.id)}
            mt={{ base: 2, md: 0 }}
            ml={{ base: 0, md: 4 }}
            size="sm"
          >
            Remove
          </Button>
        </Flex>
      ))}

      {/* Proceed to Payment Button */}
      <Box textAlign="center" mt={8}>
        <Button
          colorScheme="teal"
          size={{ base: 'md', md: 'lg' }}
          onClick={proceedToPayment}
        >
          Proceed to Payment
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
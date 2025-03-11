import React, { useState } from 'react';
import { Box, Button, Flex, Input, Text, Divider, background } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Registration successful!');
    navigate('/signin'); // Redirect to SignIn page
  };

  return (
    <Box padding={{ base: 4, md: 8 }}>
      {/* Header */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" textAlign="center" marginBottom={4}>
        Create Your Account
      </Text>
      <Divider marginBottom={8} />

      <Flex direction={{ base: "column", md: "row" }} justifyContent="center" flexWrap="wrap" gap={10}>
        {/* Registration Form */}
        <Box maxW={{ base: "100%", md: "500px" }} width="100%" padding={6} border="1px solid #e2e8f0" borderRadius="lg">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" marginBottom={6}>
            Register as a Member
          </Text>
          <Box marginBottom={4}>
            <Text marginBottom={2}>Email Address</Text>
            <Input
              placeholder="Enter your email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box marginBottom={4}>
            <Text marginBottom={2}>Password</Text>
            <Input
              placeholder="Enter your password"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box marginBottom={6}>
            <Text marginBottom={2}>Confirm Password</Text>
            <Input
              placeholder="Re-enter your password"
              type="password"
              size="lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>
        <Link to="/login"> <Button
            width="100%"
            size="lg"
            backgroundColor="black"
            color="white"
            
            onClick={handleRegister}
          >
            REGISTER
          </Button></Link> 
          <Text fontSize="sm" textAlign="center" marginTop={4}>
            By registering, you agree to the <Text as="span" color="blue.500">Terms of Use</Text> and acknowledge the <Text as="span" color="blue.500">Privacy Policy</Text>.
          </Text>
          <Divider marginY={6} />
          <Text fontSize="lg" textAlign="center">
            Already have an account?{' '}
           <Link to="/login"> <Text as="span" color="blue.500" cursor="pointer" onClick={() => navigate('/signin')}>
              Sign in here
            </Text>.
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;
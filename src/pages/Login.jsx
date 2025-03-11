// import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
// import React, { useState } from 'react'
// import Slidderline from '../Components/Slidderline'
// import { Link } from 'react-router-dom'

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = () => {
//     // Simulated sign-in logic
//     if (email && password) {
//       alert('Sign in successful!');
//     } else {
//       alert('Please enter valid email and password.');
//     }
//   };



//   return (
         
//         <div >
//            <Slidderline/>
//               <h1 style={{fontWeight:"bold", fontSize:"40px", fontFamily:"sans-serif" ,textAlign:"center",marginTop:"40px"}}>LOGIN</h1>
//               <p style={{left:"10px",marginLeft:"450px" ,marginBottom:"8px"}}>EMAIL</p>
//               {/* <Input style={{width:"40%" , marginLeft:"450px", borderRadius:"0px"}} type="text" /> */}
//               <Input
//               placeholder="Enter your email"
//               type="email"
//               size="md"
//               width={"40%"}
//               marginLeft={"450px"}
//               borderRadius={"0px"}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//               <p style={{left:"10px",marginLeft:"450px" ,marginBottom:"0px",marginTop:"30px"}}>PASSWORD <p style={{marginLeft:"470px"}}>Forgot password?.</p></p>
              
//               {/* <Input style={{width:"40%" , marginLeft:"450px", borderRadius:"0px"}} type="text" /><br/> */}
              
//               <Input
//               placeholder="Enter your password"
//               type="password"
//               size="md"
//               width={"40%"}
//               marginLeft={"450px"}
//               borderRadius={"0px"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />



//         <Link to="/"> <Button onClick={handleSignIn} style={{width:"40%" , marginLeft:"450px", borderRadius:"0px" , marginTop:"35px", backgroundColor:"black",color:"white" , height:"50px" }}  type="text">SIGN IN</Button></Link>  
//           <Link to="/register"> <p style={{textAlign:"center",marginTop:"30px", marginBottom:"30px"}}>Create Account</p></Link>    

//         </div>



//   )
// }

// export default Login



import { Button, Input, Box, Text, VStack, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Slidderline from '../Components/Slidderline'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email && password) {
      alert('Sign in successful!');
    } else {
      alert('Please enter a valid email and password.');
    }
  };

  return (
    <Box w="full" p={4} textAlign="center">
      <Slidderline />

      {/* Title */}
      <Text 
        fontWeight="bold" 
        fontSize={{ base: "28px", md: "35px", lg: "40px" }} 
        fontFamily="sans-serif" 
        mt="40px"
      >
        LOGIN
      </Text>

      <VStack 
        spacing={4} 
        w={{ base: "90%", sm: "80%", md: "60%", lg: "40%" }} 
        mx="auto" 
        mt="20px"
      >
        
        {/* Email Input */}
        <Box w="full">
          <Text textAlign="left" mb={2} fontSize={{ base: "14px", md: "16px" }}>
            EMAIL
          </Text>
          <Input
            placeholder="Enter your email"
            type="email"
            size="md"
            borderRadius="0px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        {/* Password Input */}
        <Box w="full">
          <Flex justify="space-between" align="center">
            <Text fontSize={{ base: "14px", md: "16px" }}>PASSWORD</Text>
            <Text fontSize={{ base: "12px", md: "14px" }} color="blue.500" cursor="pointer">
              Forgot password?
            </Text>
          </Flex>
          <Input
            placeholder="Enter your password"
            type="password"
            size="md"
            borderRadius="0px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        {/* Sign In Button */}
        <Link to="/">
          <Button
            onClick={handleSignIn}
            w={{ base: "90%", sm: "80%", md: "590px" }} 
            borderRadius="0px"
            mt="20px"
            bg="black"
            color="white"
            height="50px"
            _hover={{ bg: "gray.700" }}
          >
            SIGN IN
          </Button>
        </Link>

        {/* Create Account Link */}
        <Link to="/register">
          <Text fontSize="14px" color="blue.500" cursor="pointer" mt="10px">
            Create Account
          </Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Login;

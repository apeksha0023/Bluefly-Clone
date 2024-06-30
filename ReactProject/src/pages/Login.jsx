import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import Slidderline from '../Components/Slidderline'

const Login = () => {
  return (
         
        <div >
           <Slidderline/>
              <h1 style={{fontWeight:"bold", fontSize:"40px", fontFamily:"sans-serif" ,textAlign:"center",marginTop:"40px"}}>LOGIN</h1>
              <p style={{left:"10px",marginLeft:"450px" ,marginBottom:"8px"}}>EMAIL</p>
              <Input style={{width:"40%" , marginLeft:"450px", borderRadius:"0px"}} type="text" />

              <p style={{left:"10px",marginLeft:"450px" ,marginBottom:"0px",marginTop:"30px"}}>PASSWORD <p style={{marginLeft:"470px"}}>Forgot password?.</p></p>
              
              <Input style={{width:"40%" , marginLeft:"450px", borderRadius:"0px"}} type="text" /><br/>
          
            <Button style={{width:"40%" , marginLeft:"450px", borderRadius:"0px" , marginTop:"35px", backgroundColor:"black",color:"white" , height:"50px"}} type="text">SIGN IN</Button>
              <p style={{textAlign:"center",marginTop:"30px", marginBottom:"30px"}}>Create Account</p>

        </div>



  )
}

export default Login
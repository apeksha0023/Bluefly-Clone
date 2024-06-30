import { Box, Flex, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slidderline from '../Components/Slidderline'

const Clearance = () => {
  const[data,setData]=useState([])
  const{fetchId}=useParams()
  useEffect(() => {
    fetch('http://localhost:5050/All products')
    .then(e=>e.json())
    .then(e=>setData(e))
  
    
  })
  
  return (
    <div>
     <Box><Slidderline/></Box>
       <Flex>
           <Box height="auto" w="300px" >
                 <Box fontSize={20} fontWeight={500} p={0} marginTop={20} borderRadius={0}>
                 <Select style={{width:"300px", marginLeft:"0px"}} placeholder='BRAND'>
                     <option value='option1'>GUCCI</option>
                     <option value='option2'>VALANTINO</option>
                     <option value='option3'>BOTTEGA VENETA</option>
                   </Select>                  
                    
                   <Select style={{width:"300px"}} placeholder='SUB CATEGORY'>
                     <option value='option1'>WOMEN'S DAY DRESSES (8828)</option>
                     <option value='option2'>WOMEN'S PULLOVERS (2347)  </option>
                     <option value='option3'>WOMEN'S STRAIGHT PANTS </option>
                   </Select>  
 
                      <Select style={{width:"300px"}} placeholder='COLOUR'>
                     <option value='option1'>RED</option>
                     <option value='option2'>WHITE  </option>
                     <option value='option3'>BLUE </option>
                     <option value='option3'>BPINK </option>
                     <option value='option3'>YELLOW </option>
                     <option value='option3'>ORANGE </option>
                   </Select>  
 
               
                   <Select style={{width:"300px"}} placeholder='SIZE S-M-L'>
                     <option value='option1'>REGULAR XS</option>
                     <option value='option2'> REGULAR S </option>
                     <option value='option3'> REGULAR MS</option>
                   </Select>  
 
                 </Box>
               
             </Box>
                
        
         
         
      
           <Box>
             <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/4TH_OF_JULY_BANNER_1200X200_a4bf98c3-1402-4d10-ae5a-94bdc8254b1e.png?v=1719525163" alt="" />
             <h1 style={{marginTop:"20px",fontWeight:"20px"}}>PRODUCTS</h1>
           <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"15px"}}>
       
       {data.map(ele=>
                          
      <div>
     
      <Box key={ele.id}>
      <Link to={`/All products/${ele.id}`}>
       <Box>
         <img src={ele.img}  style={{height:"300px", width:"250px"}} alt="" /> 
         </Box>
      </Link>
      <Link to={`/All products/${ele.id}`}> 
      <Box  fontSize={15}>
          {ele.title}
         </Box>
  
      </Link>
      <Link to={`/All products/${ele.id}`}> 
      <Box>
          {ele.price}
        </Box>
       
      </Link>
 
     
    </Box>
      </div>
     
      )}
    </div>
           <img style={{marginTop:"30px"}}  src="https://cdn.shopify.com/s/files/1/0254/8878/5498/files/SHOP_PAY_BANNER_Top_1.jpg?v=1684348361" alt="" />
           </Box>
         </Flex>
 
 </div>
 )
}

export default Clearance
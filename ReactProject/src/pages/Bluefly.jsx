import React from 'react'

import Slidderline from '../Components/Slidderline';

import PauseOnHover from '../Components/PauseOnHover';
import { Box, Flex, grid } from '@chakra-ui/react';







const Bluefly = () => {
  return (
    <div>
         <Slidderline/>
        <div >
          <img style={{width:"100%"}} src="https://www.bluefly.com/cdn/shop/files/4TH_OF_JULY_BANNER_1200X200_a4bf98c3-1402-4d10-ae5a-94bdc8254b1e_1600x.png?v=1719525163" alt="img" />
        </div>
       
       < PauseOnHover/>
       <h1 style={{fontSize:"30px", fontWeight:"bold", marginLeft:"650px",marginTop:"20px"}}>SHOP BY CATEGORY</h1>
      <div style={{gap:"15px", display:"grid",gridTemplateColumns:"repeat(5,1fr)",}}>
          
       
      
      


       <div><img style={{width:"200px"}} src="https://www.bluefly.com/cdn/shop/files/SLAU-WY2505_V1_1800x1800.jpg?v=1719425738" alt="" />
       <h1> GEMINI CROSSBODY BAG</h1> </div>

    <div> <img style={{width:"200px"}} src="https://www.bluefly.com/cdn/shop/files/oEFmgzXW0w8Oy6Ywzi0dfTIIWGCcZLc3-25_1800x1800.jpg?v=1718812683" alt="" />
     <h1>HIILS</h1>  </div>

     <div>   <img style={{width:"200px"}} src="https://www.bluefly.com/cdn/shop/files/035616-728303-1C__90006__1_1800x1800.jpg?v=1719139716" alt="" />
        <h1>SNEAKERS</h1></div>

       <div> <img style={{width:"200px"}} src="https://www.bluefly.com/cdn/shop/files/1411162538_RLLZ_1_1800x1800.jpg?v=1718831279" alt="" />
        <h1>DRESSES</h1></div>

       <div> <img style={{width:"200px"}}  src="https://www.bluefly.com/cdn/shop/files/SL181LOULO-30001643-006__20356__1_1800x1800.jpg?v=1714289425" alt="" />
        <h1>SUNGLASSES</h1></div>

       <div> <img style={{width:"200px"}} src="https://www.bluefly.com/cdn/shop/products/2023982_1800x1800.jpg?v=1679941769" alt="" />
        <h1>MEN'S T-SHIRT</h1></div>

       <div><img style={{width:"200px"}} src="https://www.bluefly.com/cdn/shop/files/1411821523_RLLZ_1_1800x1800.jpg?v=1717138692" alt="" />
        <h1>WOMEN'S TOP</h1></div> 

       <div> <img style={{width:"200px"}} src="https://www.bluefly.com/cdn/shop/files/62251_1_1800x1800.jpg?v=1717448961" alt="" />
        <h1>JEWELRY</h1></div>
        
       <div> <img style={{width:"200px"}} src="https://www.bluefly.com/cdn/shop/files/1411624919_RLLZ_1_1800x1800.jpg?v=1719219156" alt="" />
        <h1>WOMEN'S DENIM</h1></div>

  
       
       </div> 


       <PauseOnHover/>

       <Flex margin="40px 25px 25px 90px" gap={"20px"}>
          <Box >
            <img style={{width:"400px", height:"300px"}} src="https://www.brides.com/thmb/_vMmFZEdhk7OHppN7Keae1U0df4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bri-tier-3-primary-best-amazon-purses-ahuang-037-499fc8bed2f94ec08c0e3b52fd734ca3.jpeg" alt="" />
            <h1 style={{fontWeight:"bold"}}>TRENDING LUXURY STYLES UPTO 80% OFF</h1>
          </Box>

        <Box>
        <img style={{width:"400px", height:"300px"}} src="https://i.ytimg.com/vi/rcDe7nn9vto/maxresdefault.jpg" alt="" />
        <h1 style={{fontWeight:"bold"}}>TRENDING LUXURY DRESSES UPTO 80% OFF</h1>
        </Box>
        <Box>
        <img style={{width:"400px", height:"300px"}} src="https://5.imimg.com/data5/SELLER/Default/2024/2/390381554/RF/IC/RA/5108381/puma-cricket-shoes.png" alt="" />
        <h1 style={{fontWeight:"bold"}}>TRENDING SHOES UPTO 80% OFF</h1>
        </Box>
       </Flex>
    
     </div>
  





   
  )
}

export default Bluefly
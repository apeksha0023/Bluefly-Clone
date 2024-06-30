import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Saccessories = () => {
    const[data1,setData1]=useState({})
    const{Id}=useParams()
    useEffect(() => {
      fetch(`http://localhost:5050/accessories/${Id}`)
      .then(e=>e.json())
      .then(e=>setData1(e))
     })
    return (
    <div>
        
       <Box> 
         <img src={data1?.img}  style={{width:"200px"}} alt="" /> 
          {data1?.title}
          {data1?.price}
       
          </Box>
    </div>
  )
}

export default Saccessories
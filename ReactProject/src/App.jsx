import Navbar from "./Components/Navbar"
import './App.css'
import Navbar1 from "./Components/Navbar1"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Clothing from "./pages/Clothing"
import Shoes from "./pages/Shoes"
import Handbags from "./pages/Handbags"
import Designers from "./pages/Designers"
import Sunglasses from "./pages/Sunglasses"

import Accessories from "./pages/Accessories"
import Under$50 from "./pages/Under$50"
import Clearance from "./pages/Clearance"
import Shome from "./pages/Shome"
import Bluefly from "./pages/Bluefly"
import Sclothing from "./pages/Sclothing"
import Sshoes from "./pages/Sshoes"
import Shandbags from "./pages/Shandbags"
import Ssunglasses from "./pages/Ssunglasses"
import Sdesigners from "./pages/Sdesigners"
import Jewerlywatches from "./pages/Jewelrywatches"
import Sjewelrywatches from "./pages/Sjewerlywatches"
import Saccessories from "./pages/Saccessories"
import Sunder$50 from "./pages/Sunder$50"
import Sclearance from "./pages/Sclearance"
import Login from "./pages/Login"
import Fav from "./pages/Fav"


function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <Navbar1/>
     
        <Routes>
          
        
           
        <Route path="/" element={<Bluefly/>} /> 

          <Route path="/home" element={<Home/>} />
          <Route path="/home/:Id" element={<Shome/>} />
          
          <Route path="/clothing" element={<Clothing/>}/>
          <Route path="/clothing/:Id" element={<Sclothing/>}/>

          <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/shoes/:Id" element={<Sshoes/>}/>

          <Route path="/handbags" element={<Handbags/>}/>
          <Route path="/handbags/:Id" element={<Shandbags/>}/>

          <Route path="/designers" element={<Designers/>}/>
          <Route path="/designers/:Id" element={<Sdesigners/>}/>

          <Route path="/sunglasses" element={<Sunglasses/>}/>
          <Route path="/sunglasses/:Id" element={<Ssunglasses/>}/>

         <Route path="/jewelrywatches" element={<Jewerlywatches/>}/>
         <Route path="/jewelrywatches/:Id" element={<Sjewelrywatches/>}/>


         <Route path="/accessories" element={<Accessories/>}/>
         <Route path="/accessories/:Id" element={<Saccessories/>}/>

          <Route path="/under$50" element={<Under$50/>}/>
          <Route path="/under$50/:Id" element={<Sunder$50/>}/>

          <Route path="/All products" element={<Clearance/>}/>
          <Route path="/All products/:Id" element={<Sclearance/>}/>
           
          <Route path="/login" element={<Login/>} /> 
          <Route path="/fav" element={<Fav/>} /> 
         </Routes>
        <Footer/>
      </div>
      
    </>
  )
}

export default App

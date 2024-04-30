import { useState,useEffect } from 'react'
import React from 'react';
import './App.css'
import Card from './components/card';
import axios from 'axios';


function App() {
  const [Productdata, setProductData] = useState([]);


  useEffect(()=>{
    async function getResponse(){
      
      try{
      const response = await axios.get('https://dummyjson.com/products')
      setProductData(response.data.products)
      
      
    }
    catch(err){
      console.log(err);
    }
      
    
    }
    getResponse();

      
  },[])
  return (
   <div className="container">
    {
      Productdata.map((item)=>(
       
          <Card key={item.id} product = {item} />

        
      ))
    }
   </div>
  )
}

export default App

import React from 'react'
import { useState, useEffect } from 'react';
const TypeWriter = ({title}) => {

    

        const [FinalName, setFinalName] = useState("")
        const [Index, setIndex] = useState(1)
        
        useEffect(() => {
                
           let timeout = setTimeout(()=>{
              setFinalName(title.slice(0,Index));
             setIndex((prevIndex)=>prevIndex > title.length ? 1 : prevIndex + 1);
           }, 150)
            
           return () => clearTimeout(timeout);
        
        }, [Index, title]);
          
       return <span>{FinalName}</span>;
        
        };
        
  

export default TypeWriter
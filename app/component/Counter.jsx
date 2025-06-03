"use client"

import React, { useEffect, useState } from 'react'

const Counter = ({handleChild, setCountData}) => {
  

//  const [demo , setDemo ] = useState({
//     adult:0,
//     child:0,
//     rooms:0
//  });

    const [count, setCount] = useState([
        {
            name: "Adult",
            value: 0
        }, {
            name: "Child",
            value: 0
        }, {
            name: "Rooms",
            value: 0
        }
    ])

    useEffect(() => {
      setCountData(count)
    
     
    },)
    
    const handleChange = (index, operation) => {

        setCount((prevValue)=>{
          const  updatedCount = prevValue.map((item)=>({...item}));
            if (operation === 'a') {
    updatedCount[index].value += 1;   // Always increment
  } else if (operation === 's' && updatedCount[index].value > 0) {
    updatedCount[index].value -= 1;   // Decrement only if > 0
  }
            return updatedCount;
        })
       
    }

    // const handleIncrement = ()=>{
    //     setCount(count+1)
    // }
    // const handleDecrement = ()=>{
    //     setCount(count-1)
    // }
    return (
        <div>
            <ul>
               {
                 count.map((val, index)=>(
                    <li key={index} >
                    <button onClick={()=>handleChange(index,'s')}>-</button>
                    {val.name}{val.value}
                    <button onClick={()=>handleChange(index,'a')}>+</button>
                </li>
                 ))

               }
                
            </ul>
        </div >
    )
}

export default Counter
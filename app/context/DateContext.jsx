"use client"

import {createContext, useContext, useState, useEffect} from 'react'
 const DateContext = createContext();
 export const DateProvider = ({children}) =>{
    const [date,setDate]= useState(null)
   
 
     useEffect(() => {
        if(!date){
        setDate([
        {
            startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
        },
    ])
}
    }, [])
   
        return (
            
            
            <DateContext.Provider value = {{date, setDate}}>
                {children}
            </DateContext.Provider>
            
        )
    }

export const useDate =() => useContext(DateContext);
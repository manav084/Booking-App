"use client"
import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';

const Searchbar = () => {
// function formatDate(date) {
//     const dd = String(date.getDate()).padStart(2, '0');
//     const mm = String(date.getMonth() + 1).padStart(2, '0');
//     const yyyy = date.getFullYear();
//     return `${dd}-${mm}-${yyyy}`;
//   }

     function handleSelect(ranges){
    console.log(ranges)
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

    const[date, setDate] = useState([{
     startDate: new Date(),
     endDate: new Date(),
     key: 'selection'
    }])

     const[toggleDate, setToggleDate] = useState(false)
     

    
  return (
    <>
      <div className='flex justify-between items-center '>
        <input type="text"placeholder='Where are you going?' />
        <span  onClick={()=>setToggleDate(!toggleDate)} >Start Date {format(date[0].startDate ,"dd/MM/yyyy")} - End Date {format(date[0].endDate, "dd/MM/yyyy")}

       
            </span>
        <div  className='absolute top-12  translate-x-[20%] z-[99] bg-white'>

         { toggleDate && (
             
             <DateRangePicker
             editableDateInputs= "true"
             ranges={date}
             onChange={(item)=> setDate([item.selection])}
             />
            )
        }
        </div>
        <span>0- Adult 0-child 0- room</span>
      </div>
    </>
  )
}

export default Searchbar
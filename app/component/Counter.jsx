"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'

const Counter = ({ handleChild }) => {


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
    handleChild(count)


  }, [count])

  const handleChange = (index, operation) => {

    setCount((prevValue) => {
      const updatedCount = prevValue.map((item) => ({ ...item }));
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
    <div className='bg-white p-5'>
      <ul className='flex flex-col'>
        {
          count.map((val, index) => (
            <li className='flex gap-2 items-center justify-between' key={index} >
              <button onClick={() => handleChange(index, 's')}> <FontAwesomeIcon icon={faMinus} /></button>
              <h3>
              {val.name}

              </h3>
              <h3>
                {val.value}
              </h3>
              <button onClick={() => handleChange(index, 'a')}><FontAwesomeIcon icon={faPlus}  /></button>
            </li>
          ))

        }

      </ul>
    </div >
  )
}

export default Counter
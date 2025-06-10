"use client"
import React from 'react'

const Card = () => {
  return (
    <>
    <div className='flex border-2 rounded-md gap-4 p-[10px] border-gray-500 max-w-fit max-h-fit'>
        <img className='max-h-[28vh]' src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt="" />

        <div className='flex flex-col min-w-[36vw]'>
            <section className='flex items-center justify-between'>

            <h2>Tower Street Apartments</h2>
            <section className='flex items-center gap-4'>

             <h3>Excellent</h3>
             <h3>8.9</h3>
            </section>
            </section>
         <section>
            <p className='text-gray-400'>300m from center</p>
         </section>
         <section>
            <p className='bg-green-700 text-white inline rounded-md p-0.5'>Free airport taxi</p>
         </section>
         <section>
            <h4>Studio Apartment with Air conditioning</h4>
         </section>
         <section className='flex justify-between'>
            <h3>Entire studio • 1 bathroom • 21m² 1 full bed</h3>
             <h2>$112</h2>
         </section>
      <section className='flex justify-between'>
            <h4>Free cancellation</h4>
            <h5>Includes taxes and fees</h5>
         </section>
         <section className='flex justify-between' >
            <p>You can cancel later, so lock in this great price today!</p>
            <button className='text-white bg-blue-700 rounded-md py-[8px] px-[20px]'>See availability</button>
         </section>
        </div>

    </div>
    </>
  )
}

export default Card
import React from 'react'

const Searchbox = () => {
  return (
   <>
   <div className='bg-yellow-400 min-w-1/4 flex flex-col  p-10 gap-4 rounded-3xl  '>
    <h1 className='text-gray-800 font-bold text-3xl'>Search</h1>
    <section className='flex flex-col'>
    <label htmlFor="">Destination</label>
    <input className='bg-white p-2 text-black ' type="text" name='' placeholder='location' />
    </section>

    <section  className='flex flex-col'>
    <label htmlFor="">Check-in Date</label>
    <input  className='bg-white p-2 text-black' type="text" name='' placeholder='date' />
    </section>
    <div>
        <h2>Options</h2>
        <div className='flex flex-col gap-2.5'>
            <div className='flex justify-between items-center'>
               <h2>Adult</h2>
               <input className='bg-white p-2 text-black max-w-[25%]' type="number" />
            </div>
            <div className='flex justify-between items-center'>
               <h2>Child</h2>
               <input className='bg-white p-2 text-black  max-w-[25%]' type="number "  />
            </div>
            <div className='flex justify-between items-center'>
               <h2>Room</h2>
               <input className='bg-white p-2 text-black  max-w-[25%]' type="number" />
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Searchbox
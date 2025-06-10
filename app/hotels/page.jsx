import React from 'react'
import Navbar from '../component/Navbar'
import Searchbox from '../component/Searchbox'
import Card from '../component/Card'

const page = () => {
  return (
    <>
    <Navbar />
    <div className='flex justify-center gap-32 mt-9 min-h-screen'>
     <div className="sticky top-9 h-fit ">

     <Searchbox/>
     </div>
     <div className='flex flex-col gap-3.5'>
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />

     </div>
    </div>
    </>
  )
}

export default page
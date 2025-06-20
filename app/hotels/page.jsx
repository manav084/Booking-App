"use client"
import React from 'react'
import Navbar from '../component/Navbar'
import Searchbox from '../component/Searchbox'
import Card from '../component/Card'
import { useDate } from '../context/DateContext'

const page = () => {
  const {date, setDate} = useDate();
  return (
    <>
    {/* <Navbar /> */}
    <div className='flex justify-center gap-32 mt-9 min-h-screen'>
     <div className="sticky top-9 h-fit ">
{date &&  <Searchbox date ={date} setDate ={setDate}/> }
  
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
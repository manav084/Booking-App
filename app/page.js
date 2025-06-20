"use client"
import { setDate } from "date-fns";
import CTA from "./component/CTA";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Searchbar from "./component/Searchbar";
import { DateProvider, useDate } from "./context/DateContext";

export default function Home() {
  const {date ,setDate} = useDate();
  return (
    <>
    <div className=" container">

  
    <div className="relative mb-8">

    {/* <Navbar /> */}
    <div className="absolute z-[9999] min-w-[60vw] bottom-[0px] translate-y-1/2 left-[50%] -translate-x-[50%]" >
    {date &&    <Searchbar date={date} setDate={setDate}  /> }
 

    </div>
    </div>
    <Hero />
    <CTA /> 
    {/* <Footer /> */}
      </div>
    </>
  );
}

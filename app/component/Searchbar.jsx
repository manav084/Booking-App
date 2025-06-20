"use client";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar, DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import Counter from "./Counter";
import { useDate } from "../context/DateContext";

const Searchbar = () => {
  const {date, setDate} = useDate();
  // function formatDate(date) {
  //     const dd = String(date.getDate()).padStart(2, '0');
  //     const mm = String(date.getMonth() + 1).padStart(2, '0');
  //     const yyyy = date.getFullYear();
  //     return `${dd}-${mm}-${yyyy}`;
  //   }

// const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);



  const [toggleDate, setToggleDate] = useState(false);
  const [toggleCount, setToggleCount] = useState(false);

  const[countData, setCountData ] = useState([ {
            name: "Adult",
            value: 0
        }, {
            name: "Child",
            value: 0
        }, {
            name: "Rooms",
            value: 0
        }]);

  const handleChild = (a)=> {
          setCountData(a);
  }

  return (
    <>
      <div className="flex justify-between items-center border-4 border-black hover:border-purple-800    transition-all transition-normal gap-4 bg-white rounded-2xl px-4 py-3">
        <input className="" type="text" placeholder="Where are you going?" />
        <span
          className="text-gray-400 cursor-pointer"
          onClick={() => setToggleDate(!toggleDate)}
        >
          Start Date: {format(date[0].startDate, "dd/MM/yyyy")} - End Date:{" "}
          {format(date[0].endDate, "dd/MM/yyyy")}
        </span>

          {toggleDate && (
        <div className="absolute top-16 translate-x-[20%] border-[1px] shadow-2xl">
            <DateRangePicker 
              direction="vertical"
              editableDateInputs={true}
              ranges={date}
              onChange={(item) => setDate([item.selection])}
              />
              </div>
          )}
        <span onClick={()=>setToggleCount(!toggleCount)} className="text-gray-400 cursor-pointer">
          {countData[0].value}- Adult {countData[1].value}-child {countData[2].value}- room
        </span>
        {toggleCount && (
           <div className="absolute top-16 right-20 border-[1px] shadow-2xl"> 

             <Counter handleChild = {handleChild}   />
           </div>

          
        )}
        <button className="bg-blue-600 p-2 text-white cursor-pointer">Search</button>
      </div>
    </>
  );
};

export default Searchbar;

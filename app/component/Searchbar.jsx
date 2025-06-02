"use client";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { Calendar, DateRangePicker } from "react-date-range";
import format from "date-fns/format";

const Searchbar = () => {
  // function formatDate(date) {
  //     const dd = String(date.getDate()).padStart(2, '0');
  //     const mm = String(date.getMonth() + 1).padStart(2, '0');
  //     const yyyy = date.getFullYear();
  //     return `${dd}-${mm}-${yyyy}`;
  //   }

  function handleSelect(ranges) {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [toggleDate, setToggleDate] = useState(false);

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
        <span className="text-gray-400 cursor-pointer">
          0- Adult 0-child 0- room
        </span>
      </div>
    </>
  );
};

export default Searchbar;

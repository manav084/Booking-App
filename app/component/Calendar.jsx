"use client";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


//  direction="vertical"
//               editableDateInputs={true}
//               ranges={date}
//               onChange={(item) => setDate([item.selection])}

import { Calendar, DateRangePicker } from "react-date-range";

const Calendar = ({direction, editableDateInputs, ranges, onChange}) => {
    // const [date, setDate] = useState([
    //     {
    //       startDate: new Date(),
    //       endDate: new Date(),
    //       key: "selection",
    //     },
    //   ]);
  return (
    <>
     <div >

        
                <DateRangePicker
                  direction= {direction}
                  editableDateInputs= {editableDateInputs}
                  ranges={ranges}
                   onChange={(item) => setDate([item.selection])}
                //   onChange={onChange}
                  />
                  </div>
                  </>
  )
}

export default Calendar
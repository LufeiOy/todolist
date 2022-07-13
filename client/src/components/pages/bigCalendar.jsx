import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import events from "./test.js";
const localizer = momentLocalizer(moment)

function BigCal(){

    return (
    <div class = "w-100">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "100%", width:"100%", "font-size": "1.125rem"}}
    />
  </div>);
}

export default BigCal;
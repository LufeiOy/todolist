import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
const localizer = momentLocalizer(moment)

function convertCalender(list){
  var events = []

  list.forEach(function(item){
    events.push({
      title:item["title"],
      start: `${item["date"]} ${item["start_time"]}`,
      end: `${item["date"]} ${item["end_time"]}`,
    })
  })
  return events;
}

function BigCal(){
  const url = '/api/list/all';
  const [list, setList] = useState([]);
  useEffect(()=>{
      axios.get(url)
          .then(response =>{
              setList(response.data)
          })
  }, list)
    var events = convertCalender(list)
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
import React from "react";
import SidebarLeft from "../sidebarLeft/sidebarLeft";
import SidebarMid from "./todolist/sidebarMid/sidebarMid";
import AddForm from "../addForm";
import BigCal from "./bigCalendar";
const pages_left = ["", "active", ""]
//const pages_mid = ["active", "", ""]
function Calendar(){
    return (
    <div>
    <main class="d-flex flex-nowrap">
      <SidebarLeft active = {pages_left}/>
      <div class="b-example-divider b-example-vr"></div>
      
      <BigCal/>
      <div class="b-example-divider b-right-vr"></div>
      <AddForm />

      </main>
    </div>);
}

export default Calendar;
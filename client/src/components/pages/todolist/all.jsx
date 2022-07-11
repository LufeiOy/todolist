import React from "react";

import SidebarLeft from "../../sidebarLeft/sidebarLeft";
import SidebarMid from "./sidebarMid/sidebarMid";
import ToDoItems from "../../toDoItems";
import AddForm from "../../addForm";
const pages_left = ["active", "", ""]
const pages_mid = ["active", "", ""]
function All(){
    return (
    <div>
    <main class="d-flex flex-nowrap">
      <SidebarLeft active = {pages_left}/>
      <div class="b-example-divider b-example-vr"></div>
      <SidebarMid active = {pages_mid}/>
      <ToDoItems />
      <div class="b-example-divider b-right-vr"></div>
      <AddForm />

      </main>
    </div>);
}

export default All;
import React from "react";
import SidebarLeft from "../../sidebarLeft/sidebarLeft";
import ToDoItems from "../../toDoItems";
import AddForm from "../../addForm";
const pages_left = ["", "", "active"]
function Matrix(){
    return (
    <div>
    <main class="d-flex flex-nowrap">
      <SidebarLeft active = {pages_left}/>
      <div class="b-example-divider b-example-vr"></div>
          <div class="row row-cols-1 row-cols-md-2 gx-4">
      <div class="col themed-grid-col"><ToDoItems /></div>
      <div class="col themed-grid-col"><ToDoItems /></div>
      
      <div class="col themed-grid-col"><ToDoItems /></div>
      <div class="col themed-grid-col"><ToDoItems /></div>
    </div>
      <div class="b-example-divider b-right-vr"></div>
      <AddForm />

      </main>
    </div>
    )
}

export default Matrix;
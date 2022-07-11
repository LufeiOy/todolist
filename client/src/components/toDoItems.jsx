import React from "react";
import Item from "./item";
function ToDoItems(){

    return (
        
        <div class="list-group w-50">
            <span class="fs-2 p-3">All items</span>
            
            <Item />
            <Item />
            <Item />
            <Item />
  
        </div>
    );
}

export default ToDoItems;
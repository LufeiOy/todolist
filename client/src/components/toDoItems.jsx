import React, {useState, useEffect} from "react";
import Item from "./item";
import axios from 'axios';
function createList(list){
    return <Item 
              key = {list.id}
              title = {list.title}
              description = {list.description}
              start_time = {list.start_time }
              end_time  = {list.end_time }
            />
  }
function ToDoItems(){
    const url = '/api/list/all';
    const [list, setList] = useState({"tasks":[]});
    useEffect(()=>{
        axios.get(url)
            .then(response =>{

                setList(response.data)
            })
    }, list)
    
    return (
        
        <div class="list-group w-50">
            <span class="fs-2 p-3">All items</span>
            
            {list["tasks"].map(createList)}
  
        </div>
    );
}

export default ToDoItems;
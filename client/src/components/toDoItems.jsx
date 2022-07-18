import React, {useState, useEffect} from "react";
import Item from "./item";
import axios from 'axios';
export function createList(list){
    return <Item 
              key = {list._id}
              title = {list.title}
              description = {list.description}
              start_time = {list.start_time }
              end_time  = {list.end_time }
            />
  }
function ToDoItems(props){
    const url = '/api/list/all';
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get(url)
            .then(response =>{
                console.log(response.data)
                setList(response.data)
            })
    }, list)
    //<div class="list-group w-100 " style={{"overflow-y":"scroll", height:"50vh"}}> for matrix
    //<div class="list-group w-50 " style={{"overflow-y":"scroll"}}>
    if (props.type === "matrix"){
        return (
            <span class="fs-2 p-3 w-100" style={props.style}>{props.matrix}
            <div class="list-group fs-6" style={{"overflow-y":"scroll", height:"41vh"}}>
            
                {list.map(createList)}
            </div>
            </span>
        );
    }
    else{
        return (
            <span class="fs-2 p-3 w-100"  >All items
            <div class="list-group fs-6" style={{"overflow-y":"scroll", height:"94vh"}}>
            
                {list.map(createList)}
            </div>
            </span>
        );
    }

}

export default ToDoItems;
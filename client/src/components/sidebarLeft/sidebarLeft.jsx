import React from "react";
import HomeIcon from "../icons/homeIcon";
import ViewsBar from  "./viewsBar";
import UserAvatar from "./userAvatar";

function SidebarLeft(props){
    return (
    <div class="d-flex flex-column flex-shrink-0 bg-light fixed" style={{width: "4.5rem"}}>
    <HomeIcon sx={{ fontSize: 45 }}/>
    <ViewsBar active = {props.active}/>
    <UserAvatar img = "avatar_w1.png"/>
    
  </div>
    );
}

export default SidebarLeft;
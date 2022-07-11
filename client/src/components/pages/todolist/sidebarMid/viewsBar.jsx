import React from "react";
import SvgIcon from '@mui/material/SvgIcon';

function ViewsBar(props){
    return (
    <li class="nav-item">
    <a href={props.goto} class={`nav-link ${props.active}`} aria-current="page">
    <SvgIcon {...props}>
      <path d = {props.iconPath}/>
    </SvgIcon>
      <h5>{props.label}</h5>
    </a>
  </li>);

}

export default ViewsBar;
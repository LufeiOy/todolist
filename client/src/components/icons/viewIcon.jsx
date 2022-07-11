import React from "react";
import SvgIcon from '@mui/material/SvgIcon';

function ViewIcon(props){
    return (
    <li class="nav-item">
    <a href={props.goto} class={`nav-link ${props.active} py-3 border-bottom rounded-0`} aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
    <SvgIcon {...props}>
      <path d = {props.iconPath}/>
        </SvgIcon>
    </a>
  </li>
    );
}

export default ViewIcon
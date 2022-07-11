import React from "react";

import SidebarLeft from "../../sidebarLeft/sidebarLeft";
import SidebarMid from "./sidebarMid/sidebarMid";

const pages_left = ["active", "", ""]
const pages_mid = ["", "", "active"]
function Next(){
    return (
    <div>
    <main class="d-flex flex-nowrap">
      <SidebarLeft active = {pages_left}/>
      <div class="b-example-divider b-example-vr"></div>
      <SidebarMid active = {pages_mid}/>
      <h1>Under Development</h1>
      </main>
    </div>);
}

export default Next;
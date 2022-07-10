import React from "react";
import SidebarLeft from "./sidebarLeft/sidebarLeft";
import SidebarMid from "./sidebarMid/sidebarMid";
function App() {
  return <div>
    <main class="d-flex flex-nowrap">
      <SidebarLeft />
      <div class="b-example-divider b-example-vr"></div>
      <SidebarMid />
      </main>
    </div>
   
}

export default App;

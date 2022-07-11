import React from "react";
import {Routes, Route} from "react-router-dom";
import All from "./pages/todolist/all"
import Today from "./pages/todolist/today"
import Next from "./pages/todolist/next"
function App() {
  return (
      <Routes>
        <Route path = "/" element = {<All />} />
        <Route path = "/list/all" element = {<All />} />
        <Route path = "/list/today" element = {<Today />} />
        <Route path = "/list/next" element = {<Next />} />
        <Route path = "/calendar" element = {<All />} />
        <Route path = "/matrix" element = {<All />} />
      </Routes>
    
    );
   
}

export default App;

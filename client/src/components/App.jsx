import React from "react";
import {Routes, Route} from "react-router-dom";
import All from "./pages/todolist/all"
import Today from "./pages/todolist/today"
import Next from "./pages/todolist/next"
import Calendar from "./pages/calendar";
import Matrix from "./pages/matrix/matrix";
function App() {
  return (
      <Routes>
        <Route path = "/" element = {<All />} />
        <Route path = "/list/all" element = {<All />} />
        <Route path = "/list/today" element = {<Today />} />
        <Route path = "/list/next" element = {<Next />} />
        <Route path = "/calendar" element = {<Calendar />} />
        <Route path = "/matrix" element = {< Matrix />} />
      </Routes>
    
    );
   
}

export default App;

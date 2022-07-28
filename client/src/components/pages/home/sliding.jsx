import React from "react";

function Sliding(){
    return(
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" class="active" aria-current="true" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
  
          <div class="container">
            <div class="carousel-caption">
              <h1>To Do List With Calender and Eisenhower Matrix</h1>
              <p>Sign up for an account today or continue as a guest to organize all your to-dos and make better decisions with Eisenhower Matrix !</p>
              <p>
              <a class="btn btn-lg btn-primary" href="/signup">Start to Use</a>
              <a style={{"padding-left":"10px"}}>
              <a class="btn btn-warning btn-lg" href="/list/all">Guest Mode</a>
              </a>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    )
}

export default Sliding;
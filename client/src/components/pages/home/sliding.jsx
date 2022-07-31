import React from "react";

function Sliding(){
    return(
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" class="active" aria-current="true" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000"/></svg>

          <div class="container">
            <div class="carousel-caption">
            <svg xmlns="http://www.w3.org/2000/svg" color="#24a0ed" width="140" height="140" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                </svg>
              <h1>To Do List With Calender and Eisenhower Matrix</h1>
              <p>Sign up for an account today or continue as a guest to organize all your to-dos and make better decisions with Eisenhower Matrix !</p>
              <p>
              <a class="btn btn-lg btn-primary" href="/signup">Sign Up/In</a>
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
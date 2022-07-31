import React from "react";

function NavBar(){
    return (
        <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Lufei To Do List</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">About</a>
          </li>
        </ul>
        
          <a class="btn btn-primary" href="/signup" >Sign In</a>
          <div style={{"padding-left":"10px", "padding-right":"10px"}}>
          <a class="btn btn-outline-info" href="/signup">Sign Up</a>
          </div>
          <a class="btn btn-warning" href="/list/all">Continue as Guest</a>
      </div>
    </div>
  </nav>
</header>
    );
}

export default NavBar;
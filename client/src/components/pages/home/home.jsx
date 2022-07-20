import React from "react";
import NavBar from "./navBar";
import Sliding from "./sliding";
import ThreeCircle from "./threeCircle";
function Home(){
    return (
        <div class="home_body">
            <NavBar/>
            <main>
            <Sliding/>
            <ThreeCircle/>
            </main>
        </div>
    )
}

export default Home;
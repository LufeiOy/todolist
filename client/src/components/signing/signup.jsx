import React, {useState} from "react";
import URLs from "../config/URLs";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
function Signup(){
    const [userInputs, setInputs] = useState({
        email:'', 
        password:''});

    function changeHandler(e) {
        
        setInputs({...userInputs, 
                    [e.target.name]: e.target.value})
    }
    const navigate = useNavigate();
    function submitHandler(e){
        //e.preventDefault()
        console.log(userInputs)
        axios.post(`${URLs["API_URL"]}/api/signup`, userInputs, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        navigate('/list/all');
    }
    return (
        <div class="sign-form text-center">
        <main class="form-signin w-100 m-auto">
        <form onSubmit={submitHandler}>
            
            <a href="/" class="mb-1" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                </svg>
            </a>
            <h1 class="h3 mb-3 fw-normal">Please sign up/in</h1>

            <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" required onChange={changeHandler} />
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" required onChange={changeHandler} />
            <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
                Note: If you don't have an account it will be created automatically
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up/In</button>
            <div style={{"padding-top":"10px"}}>
            <a class="w-100 btn btn-lg btn-warning" href="/list/all">Continue as Guest</a>
            </div>
            <p class="mt-5 mb-3 text-muted">&copy; 2022–2022</p>
        </form>
        </main>
            </div>
    );
}

export default Signup;
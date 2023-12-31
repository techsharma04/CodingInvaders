import React, { useState } from 'react';
import './login.css';
import loginDetails from "./LoginDetails.json";
import {useLocation, useNavigate } from 'react-router-dom';

function Login() {

    let location = useLocation();
    let navigate = useNavigate();

    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    console.log(location);
    const {email, password} = formData;
    
    function handleSubmit(e) {
        e.preventDefault();
        if(loginDetails.email === email && loginDetails.password === password){
            navigate("/todolist", true);
        }
        else {
            navigate("/invalidAccess", true);
        }

    }

    function handleChange(e){
        e.preventDefault();
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
        console.log(formData);
    }


    return (
        <div className="App">
            <header className="App-header">
                <div class="container">
                    <form onSubmit={handleSubmit}  className='login-form'>
                    <div class="heading"><h2>Todo</h2></div>
                    <div class="sub-heading"><h4>Login</h4></div>
                    <div class="email"><input type="email" placeholder="email@email.com" name='email' id='email' value={email} onChange={handleChange}/> </div>
                    <div class="pass"><input type="password" placeholder="password" name='password' id='password' value={password} onChange={handleChange}/> </div>
                    <div class="submit"><button>Login</button></div>
                    </form>
                </div>
            </header>
        </div>
    )
}

export default Login
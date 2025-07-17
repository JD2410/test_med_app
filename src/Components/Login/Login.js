import './Login.css';
// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';
// Apply CSS according to your design theme or the CSS provided in week 2 lab 2
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {
    // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const [passwordErr, setPasswordErr] = useState(false)
  // Get navigation function from react-router-dom
  const navigate = useNavigate();
  // Check if user is already authenticated, then redirect to home page
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
        navigate("/");
        }
    }, []);
    const handlePasswordBlurValidation = () => {
        if(password.trim().length < 10) {
            setPasswordErr(true)
        } else {
            setPasswordErr(false)
        }
    }
    // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    handlePasswordBlurValidation()
    
    if(!passwordErr) {
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        // Parse the response JSON
        const json = await res.json();
        if (json.authtoken) {
            // If authentication token is received, store it in session storage
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);
            // Redirect to home page and reload the window
            navigate('/');
            window.location.reload();
        } else {
        // Handle errors if authentication fails
        if (json.errors) {
            for (const error of json.errors) {
                alert(error.msg);
            }
        } else {
            alert(json.error);
        }
        }
    }
    
  };
    return (
        <>
        <div className="wrapper">
        <div className="signup-container">
            <h1>Login</h1>
            <p>Not a member yet? <a href="../Sign_Up/Sign_Up.html">Create Account</a></p>
            <form onSubmit={login}>
                <div className="input">
                    <label for="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" id="email" name="email" placeholder="Email address"  />
                </div>
                <div className="input">
                    <label for="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} onBlur={handlePasswordBlurValidation} required type="password" id="password" name="password" placeholder="Password"  />
                    {passwordErr ? <p className="inputerror">Password must be a minimum of 8 characters</p> : ""}
                </div>
                <div className="actions">
                    <input type="reset" value="Reset" />
                    <input type="submit" value="Login" />
                </div>
                <a href="#" className="forgot-password">Forgot Password</a>
            </form>
        </div></div>
        </>
    )
}

export default Login
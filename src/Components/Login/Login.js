import './Login.css';

const Login = () => {
    return (
        <>
        <div className="signup-container">
            <h1>Login</h1>
            <p>Not a member yet? <a href="../Sign_Up/Sign_Up.html">Create Account</a></p>
            <form action="">
                <div className="input">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email address" required></input>
                </div>
                <div className="input">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" min="1" required></input>
                </div>
                <div className="actions">
                    <input type="reset" value="Reset"></input>
                    <input type="submit" value="Create"></input>
                </div>
                <a href="#" className="forgot-password">Forgot Password</a>
            </form>
        </div>
        </>
    )
}

export default Login
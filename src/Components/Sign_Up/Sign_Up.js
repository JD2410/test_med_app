import './Sign_Up.css'

const Sign_Up = () => {
    return (
        <>
        <div className="signup-container">
        <h1>Sign up</h1>
        <p>Already a member? <a href="../Login/Login.html">Login</a></p>
        <form action="">
            <div className="input">
                <label for="role">Role</label>
                <input type="text" id="role" name="role" placeholder="Enter your role" min="1" required></input>
            </div>
            <div className="input">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" min="1" required></input>
            </div>
            <div className="input">
                <label for="phone">Phone Number</label>
                <input type="phone" id="phone" name="phone" placeholder="Enter your phone number" max="10" required></input>
            </div>
            <div className="input">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required></input>
            </div>
            <div className="input">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" min="1" required></input>
            </div>
            <div className="actions">
                <input type="reset" value="Reset"></input>
                <input type="submit" value="Create"></input>
            </div>
        </form>
    </div>
        </>
    )
}

export default Sign_Up
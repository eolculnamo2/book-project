import React from 'react';


// EXAMPLE OF FETCH REQUEST FOR LOGIN
// You'll need to make AuthLogin a stateful component (See if you can try to use the new useState syntax)
// When the user clicks login, you'll make a fetch request similar to the one below except it will send data from the inputs.

const payload = {
    username: 'this is the username',
    password: 'this is the password'
}

fetch('/authentication/login', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
})
.then(res => res.json())
.then(data => console.log(data));

const AuthLogin = () => (
    <div className='introPage'>
    <div className='introContainer'>
            <h1 className='introTitle'>Organize Your Library</h1>
            <ul>
            <li>Find books with book search</li>
            <li>Rate your books</li>
            <li>Books link to google books purchase option</li>
            <li>Find books with book search</li>
            </ul>
    </div>
    <div className='loginContainer'>
            <h1 id='loginTitle'>Login</h1>
            <form>
            <p>Username <br /><input className='inputs'/></p>
            <p>Password <br /><input className='inputs' type="password" /></p>
            <div className='signInArea'><a href='' className='fPw'>Forgot Password?</a>
        <br />
        <br />
            <button className='loginBtn'>Login</button>
            </div>
            </form>
            <p id='loginCreate'>Don't have an account? <a href=''>Create Account?</a></p>
    </div>
    </div>
);

export default AuthLogin;
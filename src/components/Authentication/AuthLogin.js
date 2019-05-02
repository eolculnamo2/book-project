import React from 'react';

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
            <p>Password <br /><input className='inputs'/></p>
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
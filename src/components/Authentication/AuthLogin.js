import React from 'react';

const AuthLogin = () => (
    <div className='introPage'>
    <div className='introContainer'>
            <h2>Organize Your Collection :D</h2>
            <ul>
            <li>Locate books with book search</li>
            <li>Give each read a rating</li>
            <li>Each of your reads are directly linked to google purchase</li>
            </ul>
    </div>
    <div className='loginContainer'>
            <form>
            <p>Username: <input placeholder='enter username'/></p>
            <p>Password: <input placeholder='enter password'/></p>
            <a href='' className='fPw'>Forgot Password?</a>

            <button className='loginBtn'>Submit</button>
            </form>
    </div>
    </div>
);

export default AuthLogin;
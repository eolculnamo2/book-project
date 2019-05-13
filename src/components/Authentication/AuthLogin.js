import React from 'react';

export default class AuthLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = this.state
        console.log(data)
    };

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
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
                    <form onSubmit={this.handleSubmit}>

                    <p>Username <br /><input type='text' name='username' className='inputs'
                        onChange={this.handleInput}/></p>

                    <p>Password <br /><input type='text' id='Password' className='inputs' 
                        onChange={this.handleInput}/></p>
                    <div className='signInArea'><a href='' className='fPw'>Forgot Password?</a>
                <br />
                <br />
                    <button className='loginBtn' type='submit' value='submit'>Login</button>
                    </div>
                    </form>
                    <p id='loginCreate'>Don't have an account? <a href=''>Create Account?</a></p>
            </div>
            </div>
        );
        }
    
}

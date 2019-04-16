import React from 'react';
import './Authentication.scss';
import AuthTitle from "./AuthTitle.js";
import AuthLogin from './AuthLogin.js';

class Authentication extends React.Component {
    render() {
        return (
            <div>
                <AuthTitle />
                <AuthLogin />
            </div>
        );
    }
}



export default Authentication;
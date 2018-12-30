import React from 'react';
import { BrowserRouter as Router, Link, Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Authentication from './components/Authentication/Authentication';
import Dashboard from './components/Dashboard/Dashboard';
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <div className="error-msg">
                <Switch>
                    <Route exact path='/' component={Authentication} />
                    <Route exact path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        )
    }
}

export default App;
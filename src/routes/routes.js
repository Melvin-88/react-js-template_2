import React from 'react';
import App from '../containers/App';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import MainPage from '../containers/MainPage/MainPage';
import NoMatch from '../containers/NoMatch/NoMatch';
import Authentication from '../containers/Authentication/Authentication';

export default (
    <App>
        <div>
            <Switch>
                <Route path='/' exact render={() => <Redirect to="/dashboard" push />}/>
                <Route path='/dashboard' component={MainPage} />
                <Route path='/authentication' component={Authentication} />
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </App>
)

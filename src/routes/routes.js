import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import PageForm from '../containers/MainPage/MainPage';

export default (
    <App>
        <div>
            <Route exact={true} path='/' component={MainPage}/>
            {/*<Route exact={true} path='/simulation' component={PageSimulation} />*/}
        </div>
    </App>
)

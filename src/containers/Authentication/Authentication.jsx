import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import SignIn from '../../components/Authentication/SignIn/SignIn';
import SignUp from '../../components/Authentication/SignUp/SignUp';
import RecoverPasswordFirstStep from '../../components/Authentication/RecoverPasswordFirstStep/RecoverPasswordFirstStep';


class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        const { match } = this.props;
        this.baseUrl = match.url[match.url.length - 1] == '/' ? match.url : match.url + '/';
    }

    render(){
        const { match } = this.props;
        return (
            <div className='Dashboard'>
                {sessionStorage.token ?
                    <Redirect to="/" push />
                    :
                    <div>
                        <Route
                            path={ this.baseUrl }
                            exact
                            component={SignUp}
                        />
                        <Route path={`${match.url}/recover-password-first-step`} component={RecoverPasswordFirstStep}/>
                        {/*<Route path={`${match.url}/recover-password-first-step`} component={RecoverPasswordFirst}/>*/}
                    </div>
                }
            </div>
        );
    }
}

export default Authentication;
import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../../components/Authentication/SingIn/SingIn';


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
                            component={SignIn}
                        />
                        {/*<Route path={`${match.url}/recover-password-first-step`} component={RecoverPasswordFirst}/>*/}
                    </div>
                }
            </div>
        );
    }
}

export default Authentication;
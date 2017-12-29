import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Users from '../../components/Users/Users'
import HomeHeader from '../../components/Header/Header'


class MainPage extends Component {
    constructor(props) {
        super(props);
        const { match } = this.props;
        this.baseUrl = match.url[match.url.length - 1] == '/' ? match.url : match.url + '/';
    }
    render(){
        const { match } = this.props;
        return (
            <div>
                {!sessionStorage.token ? <Redirect to={'/authentication'}/> : null}
                <HomeHeader/>
                <Switch>
                    <Route
                        path={this.baseUrl}
                        exact
                        component={Users}
                    />
                    {/*<Route path={`${match.url}/profile`} component={OwnerProfile}/>*/}
                </Switch>
            </div>
        );
    }
}

MainPage.contextTypes = {
    router: React.PropTypes.shape({
        history: React.PropTypes.object.isRequired,
    }),
};

MainPage = reduxForm({
    form: 'Record',
    enableReinitialize: true,
    //validate
})(MainPage);

function mapStateToProps(state, props) {
    return{
        //name: state.name,
        //initialValues: {
        //    name_wallet:  props.match.params.id && state.main.wallet_one.name || '',
        //    address_wallet:  props.match.params.id && state.main.wallet_one.address || ''
        //}
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        //login
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
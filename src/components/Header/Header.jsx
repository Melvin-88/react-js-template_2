import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getSimulation} from '../../actions/userActions';

class Header extends Component {
    componentWillMount(){
        this.props.getSimulation();
    }
    render(){
        const { handleSubmit, submitting } = this.props;
        return (
            <div className='Header'>
            <div className="logo">
                LOGO
            </div>
            <div className="user_select">

            </div>
        </div>
        );
    }
}

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
        getSimulation
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


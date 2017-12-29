import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class RecoverPasswordFirstStep extends Component {
    render(){
        const { handleSubmit, submitting } = this.props;
        return (
            <div>
                RecoverPasswordFirstStep
            </div>
        );
    }
}

RecoverPasswordFirstStep.contextTypes = {
    router: React.PropTypes.shape({
        history: React.PropTypes.object.isRequired,
    }),
};

RecoverPasswordFirstStep = reduxForm({
    form: 'RecoverPasswordFirstStep',
    enableReinitialize: true,
    //validate
})(RecoverPasswordFirstStep);

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

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPasswordFirstStep);
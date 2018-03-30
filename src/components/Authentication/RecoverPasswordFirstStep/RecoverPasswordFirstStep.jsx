import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Link
} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {
    loginStepFirst
} from '../../../actions/userActions';


const renderField = ({ input, label, placeholder, type, id, meta: { touched, error, warning } }) => (
    <label className={touched && error ? 'error_border block-input' : 'block-input'}>
        {label ? <span>{label}</span> : ''}
        <input {...input} placeholder={placeholder} id={id} type={type} autoComplete='off' />
        {touched && error ? <span>{error}</span> : ''}
    </label>
);

class RecoverPasswordFirstStep extends Component {
    SubmitForm=(data)=>{

    };
    getError=(error)=>{
        let message = [];
        for (let key in error) {
            message.push(error[key]);
        }
        return(
            message.map((el, i)=>{
                return (
                    <p key={i}>{el}</p>
                )
            })
        )
    };
    componentWillUnmount(){
        this.props.main.error = [];
    }
    render(){
        const { handleSubmit, main:{error} } = this.props;
        return (
            <div>
                <div className="authentication">
                    <span className="title">Collectly</span>
                    <div>
                        <span className="description">Hm, it`s seems you`re in problem when signing <br/> fill form below to get access yor account.</span>
                        <form onSubmit={handleSubmit((data)=>this.SubmitForm(data))}>
                            <Field name="user_email" type="email" component={renderField} placeholder="Email" label="Email" autoComplete='off'/>
                            <RaisedButton label="Reset Password" className={'btn btn_primary'} primary={true} fullWidth={true} type="submit"/>
                            <div>{error.length !=0 ? this.getError(error) : ''}</div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.user_email) {
        errors.user_email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
        errors.user_email = 'Enter email'
    }
    return errors
};

RecoverPasswordFirstStep.contextTypes = {
    router: React.PropTypes.shape({
        history: React.PropTypes.object.isRequired,
    }),
};

RecoverPasswordFirstStep = reduxForm({
    form: 'RecoverPasswordFirstStep',
    validate
})(RecoverPasswordFirstStep);

function  mapStateToProps(state, props) {
    return{
        main: state.main,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginStepFirst
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPasswordFirstStep);
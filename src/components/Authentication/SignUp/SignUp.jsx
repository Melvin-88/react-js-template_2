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
const renderFieldPhone = ({ input, label, placeholder, type, mask, id, meta: { touched, error, warning } }) => (
    <label className={touched && error ? 'error_border block-input' : 'block-input'}>
        {label ? <span>{label}</span> : ''}
        <MaskedInput {...input} mask={mask} placeholder={placeholder} id={id} type={type} autoComplete='off' />
        {touched && error ? <span>{error}</span> : ''}
    </label>
);

class SignUp extends Component {
    SubmitForm=(data)=>{
        let obj = {
            phone: data.phone.replace(/[-()]/gim,''),
            password: data.password
        };
        this.props.loginStepFirst(obj).then((res)=>{
            if(res.payload && res.payload.status && res.payload.status == 200 || res.payload.status == 201){
                sessionStorage.usr = res.payload.data.user_id;
                this.context.router.history.push('/authentication/login-code/');
            }
        });
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
        const { handleSubmit, submitting, main:{error} } = this.props;
        return (
            <div>
                <div className="authentication">
                    <span className="title">Collectly</span>
                    <div>
                        <span className="description">Welcome back. Please login to your account.</span>
                        <form onSubmit={handleSubmit((data)=>this.SubmitForm(data))}>
                            <Field name="user_email" type="email" component={renderField} placeholder="Email" label="Email" autoComplete='off'/>
                            <Field name="password" type="password" component={renderField} placeholder="Password" label="Password" autoComplete='off'/>
                            <RaisedButton label="Login" className={'btn btn_primary'} primary={true} fullWidth={true} type="submit"/>
                            <div>{error.length !=0 ? this.getError(error) : ''}</div>
                        </form>
                        <p className="error_message">
                            <Link to={`/authentication/recover-password-first-step`}>Forgot password?</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'The field must be less than 8 characters'
    }
    if (!values.user_email) {
        errors.user_email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
        errors.user_email = 'Enter email'
    }
    return errors
};

SignUp.contextTypes = {
    router: React.PropTypes.shape({
        history: React.PropTypes.object.isRequired,
    }),
};

SignUp = reduxForm({
    form: 'SignUp',
    validate
})(SignUp);

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
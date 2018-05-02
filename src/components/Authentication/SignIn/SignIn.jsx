import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import { postLogin } from '../../../actions/userActions';
import {Link} from 'react-router-dom';
import {
    TextField
} from 'redux-form-material-ui';
import './SignIn.scss';

class SignIn extends Component {
    state={
        loader: false
    };
    componentWillMount() {
        sessionStorage.clear();
    }
    SubmitForm=(data)=>{
        this.setState({
            loader: true
        });
        let obj = {
            phone: data.phone.indexOf('+') === 0 ? data.phone : '+'+data.phone,
            password: data.password
        };
        this.props.postLogin(obj).then((res)=>{
            this.setState({
                loader: false
            });
            if(res.payload && res.payload.status && res.payload.status == 200 || res.payload && res.payload.status && res.payload.status == 201){
                sessionStorage.id = res.payload.data.user_id;
                this.context.router.history.push('/authentication/confirm/');
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
        const { loader } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="sign-up-block">
                        <div className="authentication__box">
                            <div className="inner__block">
                                <form onSubmit={handleSubmit((data)=>{this.SubmitForm(data)})}>
                                    <div className="form-wrapper">
                                        <h2 className="auth-header">Sign in</h2>
                                        <div className="inner-div_text">
                                            <Field name="phone"  className="phone-input" type="number" component={TextField} placeholder="Phone" autoComplete='off'/>
                                        </div>
                                        <div className="inner-div_text">
                                            <Field name="password" type="password" className="phone-input" component={TextField} placeholder="Password" autoComplete='off'/>
                                        </div>
                                        {!loader ?
                                            <RaisedButton type='submit' className={'btn btn_sign_in'} labelStyle={{height: '40px'}} label="Sign in" disabled={submitting}/>
                                            :
                                            <div className="btn_loader">
                                                <img src="../../../../assets/img/loader.svg" alt=""/>
                                            </div>
                                        }
                                        <div className="global-error">{error.length !=0 ? this.getError(error) : ''}</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="sign-options">
                            <Link to="/authentication/password-recovery/first-step" className="option-link">Forgot your password?</Link>
                            <div>
                                <span className="pre-option-link">No account yet? </span>
                                <Link to="/authentication/sign-up" className="option-link">Sign up now</Link>
                            </div>
                        </div>
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
        errors.password = 'The field can not be less than 8 characters'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (!/^((8|\+7|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,13}$/.test(values.phone)) {
        errors.phone = 'Enter phone number'
    }
    return errors
};

SignIn.contextTypes = {
    router: React.PropTypes.shape({
        history: React.PropTypes.object.isRequired,
    }),
};

SignIn = reduxForm({
    form: 'SignIn',
    validate
})(SignIn);

function  mapStateToProps(state) {
    return{
        main: state.main,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
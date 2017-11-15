import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Link
} from 'react-router-dom';
import {
    loginStepFirst
} from '../../../actions/userActions';
import MaskedInput from "react-maskedinput";


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

class SingIn extends Component {
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
            <div className="background-diff h100vh">
                <div className="container">
                    <div className="logo-header">
                        <picture>
                            <source media="(max-width: 650px)" srcSet="../../assets/image/logo_sm.png" />
                            <img src="../../assets/image/logo.png" />
                        </picture>
                    </div>
                    <div className="sign-up-block">
                        <div className="authentication__box">
                            <div className="inner__block">
                                <form onSubmit={handleSubmit(this.SubmitForm.bind(this))}>
                                    <div className="form-wrapper">
                                        <h2>Войти в систему</h2>
                                        <div className="line__block">
                                            <span className="border__line" />
                                        </div>
                                        <Field name="phone" type="tel" component={renderFieldPhone} mask={"+11(111)111-11-11"} placeholder="Телефон" autoComplete='off'/>
                                        <Field name="password" type="password" component={renderField} placeholder="Пароль" autoComplete='off'/>
                                        <button type='submit' disabled={submitting}>Войти</button>
                                        <div>{error.length !=0 ? this.getError(error) : ''}</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <p className="text-center">
                            <Link to={`/authentication/recover-password-first-step`}>Забыли пароль?</Link>
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
        errors.password = 'Поле не должно быть пустым'
    } else if (values.password.length < 8) {
        errors.password = 'Поле должно быть меньше 8 символов'
    }
    if (!values.phone) {
        errors.phone = 'Поле не должно быть пустым'
    } else if (/_/i.test(values.phone)) {
        errors.phone = 'Введите номер телефона'
    }
    return errors
};

SingIn.contextTypes = {
    router: React.PropTypes.shape({
        history: React.PropTypes.object.isRequired,
    }),
};

SingIn = reduxForm({
    form: 'Record',
    validate
})(SingIn);

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

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
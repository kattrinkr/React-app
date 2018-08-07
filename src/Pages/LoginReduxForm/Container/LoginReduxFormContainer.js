import React, { Component } from 'react';

import { connect} from 'react-redux'
import { formValueSelector } from 'redux-form'
import {reduxForm} from 'redux-form'

import LoginReduxForm from '.././View'
import {emailValidator, passwordValidator} from '../Servises/checker'

class LoginReduxFormContainer extends Component {
    constructor(props){
        super(props); 

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submitter = this.submitter.bind(this);
    }

    emailChange (email) {
        return {
            email: email,
            emailError: emailValidator(email)
        }
    }

    passwordChange (password) {
        return {
            password: password,
            passwordError: passwordValidator(password)
        }
    } 
    
    submitter () {
        let store = {
            email: this.props.email,
            emailError: emailValidator(this.props.email),
            password: this.props.password,
            passwordError: passwordValidator(this.props.password)
        }
        if (!store.emailError && !store.passwordError && store.email && store.password) {
            console.log(`Email: ${store.email} Password: ${store.password}`);
            store = {
                email: store.email,
                password: store.password,
                emailError: store.emailError,
                passwordError: store.passwordError,
                signIn: true
            }
            this.props.history.push(`${process.env.PUBLIC_URL}`+'/login-redux-form/success');
        } 
    }

    render() {
        const { email, password } = this.props;
        const state = {
            email,
            password
        }
        const actions = {
            emailChange: this.emailChange,
            passwordChange: this.passwordChange,
            submitter: this.submitter
        }
        
        return <Redux state={state} actions={actions} onSubmit={(data) => console.log(data)}/>
    }
} 

const validate = values => {
    const errors = {};
    let emailError = emailValidator(values.email);
    let passwordError = passwordValidator(values.password);
    if (emailError) {
        errors.email = emailError
    }
    if (passwordError) {
        errors.password = passwordError
    }
    return errors
}

const Redux = reduxForm({
    form: 'ReduxForm',
    initialValues: {
        email: '',
        password: '',
        emailError: emailValidator(null),
        passwordError: passwordValidator(null),
        submitFailed: false,
        signIn: false
    },
    validate
  })(LoginReduxForm)

const selector = formValueSelector('ReduxForm')
const mapStateToProps = (state) => ({
    email: selector(state, 'email'),
    password: selector(state, 'password')
})
export default connect(mapStateToProps)(LoginReduxFormContainer);
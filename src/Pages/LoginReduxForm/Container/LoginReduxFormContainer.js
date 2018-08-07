import React, { Component } from 'react';

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginReduxForm from '.././View'
import * as Actions from '../Actions'
import {emailValidator, passwordValidator} from '../Servises/checker'


class LoginReduxFormContainer extends Component {
    constructor(props){
        super(props); 

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submitter = this.submitter.bind(this);
    }

    emailChange (event) {
        const payload = {
            email: event.target.value,
            emailError: emailValidator(event.target.value)
        }

        this.props.actions.emailChange(payload);
        if (this.props.form.ReduxForm.values.signIn || this.props.form.ReduxForm.values.submitFailed) {
            this.props.form.ReduxForm.values.email = event.target.value;
            this.props.form.ReduxForm.values.emailError = emailValidator(event.target.value);
        }
    }

     passwordChange (event) {
        const payload = {
            password: event.target.value,
            passwordError: passwordValidator(event.target.value)
        }

        this.props.actions.passwordChange(payload);
        if (this.props.form.ReduxForm.values.signIn || this.props.form.ReduxForm.values.submitFailed) {
            this.props.form.ReduxForm.values.password = event.target.value;
            this.props.form.ReduxForm.values.passwordError = passwordValidator(event.target.value);
        }
    } 
    
    submitter () {
        let payload;
        if (!this.props.reducerForm.emailError && !this.props.reducerForm.passwordError && this.props.reducerForm.email && this.props.reducerForm.password) {
            console.log(`Email: ${this.props.reducerForm.email} Password: ${this.props.reducerForm.password}`);
            payload = {
                email: this.props.reducerForm.email,
                password: this.props.reducerForm.password,
                emailError: this.props.reducerForm.emailError,
                passwordError: this.props.reducerForm.passwordError,
                submitFailed: this.props.reducerForm.submitFailed,
                signIn: true
            }
            this.props.form.ReduxForm.values.signIn = true;
            this.props.history.push(`${process.env.PUBLIC_URL}`+'/login-redux-form/success');
        } else {
            payload = {
                email: this.props.reducerForm.email,
                password: this.props.reducerForm.password,
                emailError: this.props.reducerForm.emailError,
                passwordError: this.props.reducerForm.passwordError,
                submitFailed: true,
                signIn: this.props.reducerForm.signIn
            }
            this.props.form.ReduxForm.values.submitFailed = true
        }
        
        this.props.form.ReduxForm.values.email = this.props.reducerForm.email;
        this.props.form.ReduxForm.values.emailError = this.props.reducerForm.emailError;
        this.props.form.ReduxForm.values.password = this.props.reducerForm.password;
        this.props.form.ReduxForm.values.passwordError = this.props.reducerForm.passwordError;
        this.props.actions.submitter(payload);
    }

    render() {
        const {email, password, emailError, passwordError, submitFailed, signIn} = this.props.reducerForm;
        const state = {
            email,
            password,
            emailError,
            passwordError,
            submitFailed,
            signIn,
            emailBool: !!email,
            passwordBool: !!password,
            emailErrorBool: !!emailError,
            passwordErrorBool: !!passwordError
        }
        const actions = {
            emailChange: this.emailChange,
            passwordChange: this.passwordChange,
            submitter: this.submitter,
            submit: this.submit
        }
        return <LoginReduxForm state={state} actions={actions}/>
    }
} 

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer);
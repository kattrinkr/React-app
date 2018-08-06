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
    }

     passwordChange (event) {
        const payload = {
            password: event.target.value,
            passwordError: passwordValidator(event.target.value)
        }

        this.props.actions.passwordChange(payload);
    } 
    
    submitter () {
        let payload;
        if (!this.props.emailError && !this.props.passwordError && this.props.email && this.props.password) {
            console.log(`Email: ${this.props.email} Password: ${this.props.password}`);
            payload = {
                email: this.props.email,
                password: this.props.password,
                emailError: this.props.emailError,
                passwordError: this.props.passwordError,
                submitFailed: this.props.submitFailed,
                signIn: true
            }
            this.props.history.push(`${process.env.PUBLIC_URL}`+'/login-redux/success');
        } else {
            payload = {
                email: this.props.email,
                password: this.props.password,
                emailError: this.props.emailError,
                passwordError: this.props.passwordError,
                submitFailed: true,
                signIn: this.props.signIn
            }
        }
        
        this.props.actions.submitter(payload);
    }

    render() {
        const {email, password, emailError, passwordError, submitFailed, signIn} = this.props;
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
            submitter: this.submitter
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
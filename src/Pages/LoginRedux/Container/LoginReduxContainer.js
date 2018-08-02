import React, { Component } from 'react';

import LoginRedux from '../View'
import { emailChecker, passwordChecker } from '../Servises/checker'

class LoginReduxContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailError: emailChecker(null),
            passwordError: passwordChecker(null),
            submitFaild: false
        }

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submitter = this.submitter.bind(this);
    }
    
    emailChange({target}) {
        let email = target.value.trim()
        this.setState( {
            email: email,
            emailError: emailChecker(email),
        })
    }

    passwordChange({target}) {
        this.setState({
                password: target.value,
                passwordError: passwordChecker(target.value)
            }
        )
    }

    submitter() {
        const EMAIL = this.state.email;
        const PASSWORD = this.state.password;
        if (!this.state.emailError && !this.state.passwordError && EMAIL && PASSWORD) {
            console.log(`Email: ${EMAIL} Password: ${PASSWORD}`);
            this.setState( {
                email: '',
                password: '',
                emailError: emailChecker(null),
                passwordError: passwordChecker(null),
                submitFaild: false
            })
        } else {
            this.setState( {
                submitFaild: true
            })
        }
    }

    render() {
        const {email, password, emailError, passwordError, submitFaild} = this.state;
        const props = {
            emailChange: this.emailChange,
            passwordChange: this.passwordChange,
            validator: this.validator,
            submitter: this.submitter,
            email,
            password, 
            emailError, 
            passwordError, 
            submitFaild
        }

        return <LoginRedux {...props} />;
    }
}

export default LoginReduxContainer;
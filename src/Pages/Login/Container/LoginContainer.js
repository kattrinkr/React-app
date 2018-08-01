import React, { Component } from 'react';

import Login from '../View'
import {REG, MIN_VALUE_FOR_PASSWORD} from '../Constants'

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false,
            firstValidation: false
        }

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.validator = this.validator.bind(this);
    }
    
    emailChange({target}) {
        let email = target.value.trim()
        this.setState(() => {
            return {
                email: email
            }
        })
        if (this.state.emailError === true) {
            if (REG.test(target.value)) {
                this.setState(() => {
                    return {
                        emailError: false
                    }
                })
            }
        } else if (!REG.test(target.value) && this.state.firstValidation) {
            this.setState(() => {
                return {
                    emailError: true
                }
            })
        }
    }

    passwordChange({target}) {
        this.setState(() => {
            return {
                password: target.value
            }
        }) 
        if (this.state.passwordError === true) {
            if (target.value.length >= MIN_VALUE_FOR_PASSWORD) {
                this.setState(() => {
                    return {
                        passwordError: false
                    }
                })
            }
        } else if ((target.value.length < MIN_VALUE_FOR_PASSWORD) && this.state.firstValidation) {
            this.setState(() => {
                return {
                    passwordError: true
                }
            })
        }
    }

    validator(event) {        
        const EMAIL = this.state.email;
        const PASSWORD = this.state.password;
        
        if (REG.test(EMAIL) && PASSWORD.length >= MIN_VALUE_FOR_PASSWORD) {
            console.log(`Email: ${EMAIL} Password: ${PASSWORD}`);
            this.setState(() => {
                return {
                    email: '',
                    password: ''
                }
            })
        } else {
            if (REG.test(EMAIL) === false) {
                this.setState(() => {
                    return {
                        emailError: true,
                        firstValidation: true
                    }
                })
            } 
            if ((PASSWORD.length >= MIN_VALUE_FOR_PASSWORD) === false) {
                this.setState(() => {
                    return {
                        passwordError: true,
                        firstValidation: true
                    }
                })
            }
        }
    }

    render() {
        const {email, password, emailError, passwordError} = this.state;
        const props = {
            emailChange: this.emailChange,
            passwordChange: this.passwordChange,
            validator: this.validator,
            email,
            password, 
            emailError, 
            passwordError
        }

        return <Login {...props} />;
    }
}

export default LoginContainer;
import React, { Component } from 'react';

import Login from '../View/index'

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.validator = this.validator.bind(this);
    }
    
    emailChange() {
        const EMAIL = document.getElementById('email');
        EMAIL.addEventListener('input', (event) => {
            this.setState(() => {
                return {
                    email: EMAIL.value
                }
            })      
        });
    }

    passwordChange() {
        const PASSWORD = document.getElementById('password');
        PASSWORD.addEventListener('input', (event) => {
            this.setState(() => {
                return {
                    password: PASSWORD.value
                }
            })       
        });
    }

    validator() {        
        const EMAIL = document.getElementById('email');
        const PASSWORD = document.getElementById('password');
        const REG = /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/;
        const MinValueForPassword = 6;
        
        if (REG.test(EMAIL.value) && PASSWORD.value.length >= MinValueForPassword) {
            console.log(`Email: ${EMAIL.value} Password: ${PASSWORD.value}`);
            EMAIL.value = '';
            PASSWORD.value ='';
            this.setState(() => {
                return {
                    email: '',
                    password: ''
                }
            })
        } else {
            alert('Некорректный Email или недостаточно символов в пароле. Попробуйте еще раз.');
        }
    }

    render() {
        const {email, password} = this.state;
        const props = {
            emailChange: this.emailChange,
            passwordChange: this.passwordChange,
            validator: this.validator,
            email,
            password
        }

        return <Login {...props} />;
    }
}

export default LoginContainer;
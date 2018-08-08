import React, { Component } from 'react';

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { formValueSelector } from 'redux-form'

import LoginReduxForm from '.././View'
import {emailValidator, passwordValidator} from '../Servises/checker'
import * as Actions from '../Actions'

class LoginReduxFormContainer extends Component {
    constructor(props){
        super(props); 

        this.onSubmit = this.onSubmit.bind(this);
    }

    static validate = values => {
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
    
    onSubmit (data) {
        console.log(`Email: ${data.email} Password: ${data.password}`);
        this.props.actions.setData(data);
        this.props.history.push(`${process.env.PUBLIC_URL}`+'/login-redux-form/success');
    }

    render() {
        const { email, password } = this.props;

        const props = {
            email,
            password,
            onSubmit: this.onSubmit,
            form: 'ReduxForm',
            validate: LoginReduxFormContainer.validate,
        }

        return <LoginReduxForm {...props} />
    }
}

const selector = formValueSelector('ReduxForm')

const mapStateToProps = (state) => ({
    email: selector(state, 'email'),
    password: selector(state, 'password')
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer);
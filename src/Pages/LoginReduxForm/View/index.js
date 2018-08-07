import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {reduxForm} from 'redux-form'

import Menu from '../../../Components/Menu'
import Styles from './styles';
import {emailValidator, passwordValidator} from '../Servises/checker'

let LoginReduxForm = ({actions, state, classes}) => {
    return (
        <div> 
            <Menu tab='login-redux-form'/>
            <h1 className={classes.h1}>Welcome to the validator!</h1>
            <p className={classes.instruction}>Email should be correct and password should consist of 6 symbols and more.</p>
            <form className={classes.form}> 
                <TextField 
                name="email"
                label="Email"
                className={classes.input} 
                onInput={actions.emailChange}
                error={state.emailErrorBool && state.submitFailed}
                />
                <TextField
                name="password"
                label="Password"
                type="password" 
                className={classes.input} 
                onInput={actions.passwordChange}
                error={state.passwordErrorBool && state.submitFailed}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={actions.submitter} 
                  className={classes.button}> Войти
                </Button>
            </form>
            <div className={classes.realTime}>
                <p className={classes.p}>{state.email}</p>
                <p className={classes.p}>{state.password}</p>
            </div>
            {state.submitFailed ?   <div>
                                        <p className={classes.emailError}>{state.emailError }</p>
                                        <p className={classes.passwordError}>{state.passwordError}</p>
                                    </div> : null} 
            
      </div>
    )
}

LoginReduxForm.propTypes = {
    actions: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
}

export default withStyles(Styles)(reduxForm({
    form: 'ReduxForm',
    initialValues: {
        email: '',
        password: '',
        emailError: emailValidator(null),
        passwordError: passwordValidator(null),
        submitFailed: false,
        signIn: false
    }
  })(LoginReduxForm))
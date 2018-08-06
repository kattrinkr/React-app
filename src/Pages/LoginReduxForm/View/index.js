import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Menu from '../../../Components/Menu'
import Styles from './styles';

const LoginReduxForm = ({actions, state, classes}) => {
    return (
        <div> 
            <Menu tab='login-redux'/>
            <h1 className={classes.h1}>Welcome to the validator!</h1>
            <p className={classes.instruction}>Email should be correct and password should consist of 6 symbols and more.</p>
            <form className={classes.form}>
                <TextField 
                label="Email"
                className={classes.input} 
                onInput={actions.emailChange}
                value={state.email}
                error={state.emailErrorBool && state.submitFailed}
                />
                <TextField
                label="Password"
                type="password" 
                className={classes.input} 
                onInput={actions.passwordChange}
                value={state.password}
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

export default withStyles(Styles)(LoginReduxForm)
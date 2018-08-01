import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Menu from '../../../Components/Menu'
import Styles from './styles';

const Login = ({emailChange, passwordChange, validator, email, password, emailError, passwordError, classes}) => {
    return (
      <div> 
          <Menu tab='login'/>
          <h1 className={classes.h1}>Welcome to the validator!</h1>
          <p className={classes.instruction}>Email should be correct and password should consist of 6 symbols and more.</p>
          <form className={classes.form}>
              <TextField 
                label="Email"
                className={classes.input} 
                onInput={emailChange}
                value={email}
                error={emailError}
              />
              <TextField
                label="Password"
                type="password" 
                className={classes.input} 
                onInput={passwordChange}
                value={password}
                error={passwordError}
              />
              <Button 
                variant="contained" 
                color="primary" 
                onClick={validator} 
                className={classes.button}> Войти
              </Button>
          </form>
          <div className={classes.realTime}>
              <p className={classes.p}>{email}</p>
              <p className={classes.p}>{password}</p>
          </div>
      </div>
    )
}

Login.propTypes = {
    emailChange: PropTypes.func.isRequired,
    passwordChange: PropTypes.func.isRequired,
    validator: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default withStyles(Styles)(Login)
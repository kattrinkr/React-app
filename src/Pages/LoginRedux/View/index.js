import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import Menu from '../../../Components/Menu'
import Styles from './styles';

const LoginRedux = ({emailChange, passwordChange, submitter, email, password, emailError, passwordError, submitFailed, signIn, classes}) => {
    return (
      <div> 
          <Menu tab='login-redux'/>
          <h1 className={classes.h1}>Welcome to the validator!</h1>
          <p className={classes.instruction}>Email should be correct and password should consist of 6 symbols and more.</p>
          <form className={classes.form}>
              <TextField 
                label="Email"
                className={classes.input} 
                onInput={emailChange}
                value={email}
                error={!!emailError && submitFailed}
              />
              <TextField
                label="Password"
                type="password" 
                className={classes.input} 
                onInput={passwordChange}
                value={password}
                error={!!passwordError && submitFailed}
              />
              <Link to={(!!password && !!email && !(!!passwordError) && !(!!emailError)) ? process.env.PUBLIC_URL + '/login-redux/success' : process.env.PUBLIC_URL + '/login-redux/'}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={submitter} 
                  className={classes.button}> Войти
                </Button>
              </Link>
          </form>
          <div className={classes.realTime}>
              <p className={classes.p}>{email}</p>
              <p className={classes.p}>{password}</p>
          </div>
          {submitFailed ?   <div>
                                <p className={classes.emailError}>{emailError }</p>
                                <p className={classes.passwordError}>{passwordError}</p>
                            </div> : null} 
            
      </div>
    )
}

LoginRedux.propTypes = {
    emailChange: PropTypes.func.isRequired,
    passwordChange: PropTypes.func.isRequired,
    submitter: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    emailError: PropTypes.string,
    passwordError: PropTypes.string,
    signIn: PropTypes.bool
}

export default withStyles(Styles)(LoginRedux)
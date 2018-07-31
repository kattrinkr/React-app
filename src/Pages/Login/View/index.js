import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Menu from '../../../Components/Menu/View/index'
import Styles from './styles';

const Login = ({emailChange, passwordChange, validator, email, password, classes}) => {
    return (
      <div> 
        <Menu tab='login'/>
        <form id='login' className={classes.form}>
          <input type='email' id='email'placeholder='Email' className={classes.input} onChange={emailChange}/>
          <input type='password' id='password' placeholder='Password' className={classes.input} onChange={passwordChange}/>
          <button type='button' id='button' onClick={validator} className={classes.button}>Войти</button>
        </form>
        <p className={classes.p}>{email}</p>
        <p className={classes.p}>{password}</p>
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
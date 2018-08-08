import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';

import Menu from '../../../Components/Menu'
import Styles from './styles';
import TextField from '../Components'

let LoginReduxForm = ({email, password, classes, handleSubmit}) => {
    return (
        <div>
            <Menu tab='login-redux-form'/>
            <h1 className={classes.h1}>Welcome to the validator!</h1>
            <p className={classes.instruction}>Email should be correct and password should consist of 6 symbols and more.</p>
            <form className={classes.form} onSubmit={handleSubmit}> 
                <Field name="email"
                   floatingLabelText="Email" 
                   className={classes.input}
                   component={TextField}
                />
                <Field name="password"
                   floatingLabelText="Password" 
                   className={classes.input}
                   component={TextField}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  className={classes.button}
                  type="submit"> Войти
                </Button>
            </form>
            <div className={classes.realTime}>
                <p className={classes.p}>{email}</p>
                <p className={classes.p}>{password}</p>
            </div>
        </div>
    )
}

LoginReduxForm.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string
}
export default withStyles(Styles)(reduxForm()(LoginReduxForm))
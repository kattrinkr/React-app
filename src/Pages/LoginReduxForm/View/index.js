import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Field } from 'redux-form';

import Menu from '../../../Components/Menu'
import Styles from './styles';
import TextFieldContainer from '../Components'

let LoginReduxForm = ({actions, state, classes, handleSubmit}) => {
    return (
        <div>
            <Menu tab='login-redux-form'/>
            <h1 className={classes.h1}>Welcome to the validator!</h1>
            <p className={classes.instruction}>Email should be correct and password should consist of 6 symbols and more.</p>
            <form className={classes.form} onSubmit={handleSubmit}> 
                <Field name="email"
                   floatingLabelText="Email" 
                   className={classes.input}
                   component={TextFieldContainer}
                />
                <Field name="password"
                   floatingLabelText="Password" 
                   className={classes.input}
                   component={TextFieldContainer}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={actions.submitter} 
                  className={classes.button}
                  type="submit"> Войти
                </Button>
            </form>
            <div className={classes.realTime}>
                <p className={classes.p}>{state.email}</p>
                <p className={classes.p}>{state.password}</p>
            </div>
        </div>
    )
}

LoginReduxForm.propTypes = {
    actions: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
}
export default withStyles(Styles)(LoginReduxForm)
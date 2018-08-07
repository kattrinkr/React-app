import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'

import Success from '../View'
import {store} from '../../../Reducer/Reducer'

class FormSuccessContainer extends Component {
    render() {
        const state = store.getState();
        var result;
        if (!state.form.ReduxForm) {
            result = <Redirect to={process.env.PUBLIC_URL + '/login-redux-form'}/>
        } else if (state.form.ReduxForm.anyTouched === true){
            const props = {
                email: state.form.ReduxForm.values.email,
                password: state.form.ReduxForm.values.password
            }
            result = <Success {...props}/>
        }
        return result;
    }
}



export default FormSuccessContainer;
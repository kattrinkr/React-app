import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'

import Success from '../View'
import {store} from '../../../Reducer/Reducer'

class FormSuccessContainer extends Component {
    render() {
        const state = store.getState();
        const props = {
            email: state.reducerForm.email,
            password: state.reducerForm.password
        }
        var result;
        if (!state.reducerForm.signIn) {
            result = <Redirect to={process.env.PUBLIC_URL + '/login-redux-form'}/>
        } else {
            result = <Success {...props}/>
        }
        return result;
    }
}



export default FormSuccessContainer;
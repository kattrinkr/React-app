import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'

import Success from '../View'
import {store} from '../../../Reducer/Reducer'

class FormSuccessContainer extends Component {
    render() {
        const state = store.getState();
        const props = {
            email: state.email,
            password: state.password
        }
        var result;
        if (!state.signIn) {
            result = <Redirect to={process.env.PUBLIC_URL + '/login-redux'}/>
        } else {
            result = <Success {...props}/>
        }
        return result;
    }
}



export default FormSuccessContainer;
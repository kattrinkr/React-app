import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'

import Success from '../View'
import {store} from '../../../Reducer/Reducer'

class FormSuccessContainer extends Component {
    render() {
        const state = store.getState();
        var result;
        if (!state.reducerForm.email && !state.reducerForm.password) {
            result = <Redirect to={process.env.PUBLIC_URL + '/login-redux-form'}/>
        } else {
            console.log(state)
            const props = {
                email: state.reducerForm.email,
                password: state.reducerForm.password
            }
            result = <Success {...props}/>
        }
        return result;
    }
}



export default FormSuccessContainer;
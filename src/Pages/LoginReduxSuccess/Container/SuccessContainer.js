import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'

import Success from '../View'
import {store} from '../../../Reducer/Reducer'

class SuccessContainer extends Component {
    render() {
        const state = store.getState();
        const props = {
            email: state.reducer.email,
            password: state.reducer.password
        }
        var result;
        if (!state.reducer.signIn) {
            result = <Redirect to={process.env.PUBLIC_URL + '/login-redux'}/>
        } else {
            result = <Success {...props}/>
        }
        return result;
    }
}



export default SuccessContainer;
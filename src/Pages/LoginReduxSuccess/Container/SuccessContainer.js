import React, { Component } from 'react';

import Success from '../View'
import {store} from '../../../RootReducer/RootReducer'

class SuccessContainer extends Component {
    render() {
        const state = store.getState();
        const props = {
            email: state.email,
            password: state.password
        }
        return  <Success {...props}/>
    }
}



export default SuccessContainer;
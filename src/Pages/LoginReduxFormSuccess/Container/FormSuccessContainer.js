import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'
import { connect} from 'react-redux'

import Success from '../View'

class FormSuccessContainer extends Component {
    render() {
        var result;
        if (!this.props.reducerForm.email && !this.props.reducerForm.password) {
            result = <Redirect to={process.env.PUBLIC_URL + '/login-redux-form'}/>
        } else {
            const props = {
                email: this.props.reducerForm.email,
                password: this.props.reducerForm.password
            }
            result = <Success {...props}/>
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(FormSuccessContainer);
import React, { Component } from 'react';

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginRedux from '.././View'
import {store} from '../../../RootReducer/RootReducer'
import {emailChange, passwordChange, submitter} from '../ActionCreators'


class LoginReduxContainer extends Component {
    render() {
        return  <Container store={store}/>
    }
} 

const mapStateToProps = () => {
    let state = store.getState();
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        emailChange: bindActionCreators(emailChange, dispatch),
        passwordChange: bindActionCreators(passwordChange, dispatch),
        submitter: bindActionCreators(submitter, dispatch)
    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(LoginRedux);

export default LoginReduxContainer;
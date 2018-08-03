import { createStore } from 'redux'

import reducer from '../Pages/LoginRedux/Reducer'
import {emailValidator, passwordValidator} from '../Pages/LoginRedux/Servises/checker'

const initialState = {
    email: '',
    password: '',
    emailError: emailValidator(null),
    passwordError: passwordValidator(null),
    submitFailed: false
};

const store = createStore(reducer, initialState);

export {store}
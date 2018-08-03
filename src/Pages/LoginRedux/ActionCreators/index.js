import {emailValidator, passwordValidator} from '../Servises/checker'
import {store} from '../../../RootReducer/RootReducer'

function emailChange (event) {
    return {
        type: 'EMAIL_CHANGE',
        email: event.target.value,
        emailError: emailValidator(event.target.value),
        signIn: true
    };
};

function passwordChange (event) {
    return {
        type: 'PASSWORD_CHANGE',
        password: event.target.value,
        passwordError: passwordValidator(event.target.value),
        signIn: true
    };
};

function submitter () {
    let state = store.getState();
    var result;
    if (!state.emailError && !state.passwordError && state.email && state.password) {
        console.log(`Email: ${state.email} Password: ${state.password}`);
        result = {
            ...state,
            type: 'SUBMITTER'
        }
    } else {
        result = {
            type: 'SUBMITTER',
            submitFailed: true,
            signIn: true,
        }
    }
    return result;
};

export {emailChange, passwordChange, submitter}
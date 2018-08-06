import {emailValidator, passwordValidator} from '../Servises/checker'
import {store} from '../../../RootReducer/RootReducer'

function emailChange (event) {
    return {
        type: 'EMAIL_CHANGE',
        email: event.target.value,
        emailError: emailValidator(event.target.value)
    };
};

function passwordChange (event) {
    return {
        type: 'PASSWORD_CHANGE',
        password: event.target.value,
        passwordError: passwordValidator(event.target.value)
    };
};

function submitter () {
    let state = store.getState();
    var result;
    if (!state.emailError && !state.passwordError && state.email && state.password) {
        console.log(`Email: ${state.email} Password: ${state.password}`);
        result = {
            ...state,
            type: 'SUBMITTER',
            signIn: true
        }
    } else {
        result = {
            type: 'SUBMITTER',
            submitFailed: true,
        }
    }
    return result;
};

export {emailChange, passwordChange, submitter}
import {emailValidator, passwordValidator} from '../Servises/checker'

const initialState = {
    email: '',
    password: '',
    emailError: emailValidator(null),
    passwordError: passwordValidator(null),
    submitFailed: false,
    signIn: false
};

const reducer = (state = initialState, action) => {
    var result;
    switch (action.type) {
        case 'EMAIL_CHANGE': 
            result = {
                ...state,
                email: action.email,
                emailError: action.emailError 
            }
            break;
        case 'PASSWORD_CHANGE': 
            result = {
                ...state,
                password: action.password,
                passwordError: action.passwordError 
            }
            break;
        case 'SUBMITTER': 
            result = {
                email: action.email,
                password: action.password,
                emailError: action.emailError,
                passwordError: action.passwordError,
                submitFailed: action.submitFailed,
                signIn:  action.signIn 
            }
            break; 
        default: 
            result = {
                ...state
            }
            break;
    } 
    return result; 
}

export default reducer
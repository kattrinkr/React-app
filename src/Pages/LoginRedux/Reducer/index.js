const reducer = (state, action) => {
    switch (action.type) {
      case 'EMAIL_CHANGE': 
          return {
              ...state,
              email: action.email,
              emailError: action.emailError 
      }
      case 'PASSWORD_CHANGE': 
          return {
              ...state,
              password: action.password,
              passwordError: action.passwordError 
      }
      case 'SUBMITTER': 
          var result;
          if (action.submitFailed === false) {
              result = {
                  email: action.email,
                  password: action.password,
                  emailError: action.emailError,
                  passwordError: action.passwordError,
                  submitFailed: action.submitFailed,
                  signIn:  action.signIn 
             }
          } else {
              result = {
                  ...state,
                  submitFailed: action.submitFailed,
                  signIn:  action.signIn 
              }
          }
          return result;
      default: return {
          ...state  
      }
  } 
};

export default reducer
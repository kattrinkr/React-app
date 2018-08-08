const initialState = {
    email: '',
    password: ''
};

const reducerForm = (state = initialState, action) => {
    var result;
    if (action.meta) {
        switch (action.meta.field) {
            case 'email': 
                result = {
                    ...state,
                    email: action.payload 
                }
            break;
            case 'password': 
                result = {
                    ...state,
                    password: action.payload 
                }
            break;
            default: 
                result = {
                    ...state
                }
            break;
        } 
        return result; 
    } else {
        return state;
    }
}

export default reducerForm
const initialState = {
    email: '',
    password: ''
};

const reducerForm = (state = initialState, action) => {
    var result;
        switch (action.type) {
            case 'SET_DATA': 
                result = {
                    ...state,
                    email: action.email,
                    password: action.password 
                }
            break;
            default: 
                result = state
            break;
        } 
    return result;
}

export default reducerForm
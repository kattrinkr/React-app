import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import reducer from '../Pages/LoginRedux/Reducer'
import reducerForm from '../Pages/LoginReduxForm/Reducer'

const reducers = combineReducers({
    reducer: reducer,
    reducerForm: reducerForm,
    form: formReducer
})

const store = createStore(reducers);

export {store}
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import reducer from '../Pages/LoginRedux/Reducer'
import reducerForm from '../Pages/LoginReduxForm/Reducer'

const reducers = combineReducers({
    reducer: reducer,
    form: formReducer,
    reducerForm: reducerForm
})

const store = createStore(reducers);

export {store}
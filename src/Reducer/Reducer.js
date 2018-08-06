import { createStore } from 'redux'

import reducer from '../Pages/LoginRedux/Reducer'

const store = createStore(reducer);

export {store}
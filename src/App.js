import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'

import {store} from './RootReducer/RootReducer'
import Menu from './Components/Menu';
import About from './Pages/About';
import MainCounterContainer from './Pages/Counters';
import SuccessContainer from './Pages/LoginReduxSuccess/Container/SuccessContainer'
import LoginContainer from './Pages/Login';
import LoginReduxContainer from './Pages/LoginRedux';
import Error from './Pages/Error';

const App = () => {
    let state = store.getState();
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Menu}/>
            <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
            <Route path={process.env.PUBLIC_URL + '/counters'} component={MainCounterContainer}/>
            <Route path={process.env.PUBLIC_URL + '/login'} component={LoginContainer}/>
            
            <Route path={process.env.PUBLIC_URL + '/login-redux'} component={LoginReduxContainer}/>
            <Route path={state.signIn? process.env.PUBLIC_URL + '/login-redux/success' : process.env.PUBLIC_URL + '/login-redux'} component={SuccessContainer}/> 
            <Route component={Error}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
}

export default App

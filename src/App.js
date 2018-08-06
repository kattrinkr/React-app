import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import {store} from './Reducer/Reducer'
import Menu from './Components/Menu';
import About from './Pages/About';
import MainCounterContainer from './Pages/Counters';
import LoginContainer from './Pages/Login';
import SuccessContainer from './Pages/LoginReduxSuccess/Container/SuccessContainer'
import LoginReduxContainer from './Pages/LoginRedux';
import FormSuccessContainer from './Pages/LoginReduxFormSuccess/Container/FormSuccessContainer'
import LoginReduxFormContainer from './Pages/LoginReduxForm';
import Error from './Pages/Error';

const App = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Menu}/>
            <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
            <Route path={process.env.PUBLIC_URL + '/counters'} component={MainCounterContainer}/>
            <Route path={process.env.PUBLIC_URL + '/login'} component={LoginContainer}/>
            <Route path={process.env.PUBLIC_URL + '/login-redux/success'} component={SuccessContainer}/> 
            <Route path={process.env.PUBLIC_URL + '/login-redux'} component={LoginReduxContainer}/>
            <Route path={process.env.PUBLIC_URL + '/login-redux-form/success'} component={FormSuccessContainer}/> 
            <Route path={process.env.PUBLIC_URL + '/login-redux-form'} component={LoginReduxFormContainer}/>
            <Route component={Error}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
}

export default App

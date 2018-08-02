import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import Menu from './Components/Menu';
import About from './Pages/About';
import MainCounterContainer from './Pages/Counters';
import LoginContainer from './Pages/Login';
import LoginReduxContainer from './Pages/LoginRedux';
import Error from './Pages/Error';

const App = () => {
    return (
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Menu}/>
            <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
            <Route path={process.env.PUBLIC_URL + '/counters'} component={MainCounterContainer}/>
            <Route path={process.env.PUBLIC_URL + '/login'} component={LoginContainer}/>
            <Route path={process.env.PUBLIC_URL + '/login-redux'} component={LoginReduxContainer}/>
            <Route component={Error}/>
          </Switch>
        </div>
        </BrowserRouter>
    )
}

export default App
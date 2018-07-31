import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import MainCounterContainer from './Pages/Counters/MainCounter/Container/MainCounterContainer';
import About from './Pages/About/View/index';
import Error from './Pages/Error/View/index';
import Menu from './Components/Menu/View/index';
import LoginContainer from './Pages/Login/Container/LoginContainer';

const App = () => {
    return (
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Menu}/>
            <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
            <Route path={process.env.PUBLIC_URL + '/counters'} component={MainCounterContainer}/>
            <Route path={process.env.PUBLIC_URL + '/login'} component={LoginContainer}/>
            <Route component={Error}/>
          </Switch>
        </div>
        </BrowserRouter>
    )
}

export default App
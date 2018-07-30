import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import MainCounterContainer from './containers/MainCounterContainer';
import About from './views/About/index';
import Error from './views/Error';
import MenuContainer from './containers/MenuContainer';

const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={() => <MenuContainer tab={'home'}/>}/>
            <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
            <Route path={process.env.PUBLIC_URL + '/counters'} component={MainCounterContainer}/>
            <Route path='*' component={Error}/>
          </Switch>
        </BrowserRouter>
    )
}

export default App
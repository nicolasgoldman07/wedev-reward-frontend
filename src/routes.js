import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './views/Home';
import { SignIn } from './views/SignIn';
import { SignUp } from './views/SignUp';
import { NoMatch } from './views/NoMatch';
import { NavBar } from './components/NavBar';

function Routes() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/auth/signin' component={SignIn} />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/auth/signup' component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Routes;

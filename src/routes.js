import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './views/Home';
import { SignIn } from './views/SignIn';
import { SignUp } from './views/SignUp';
import { NoMatch } from './views/NoMatch';
import { NavBar } from './components/NavBar';

import { useQuery } from '@apollo/react-hooks';

import CURRENT_USER from './apollo/queries/currentUserQuery';

function Routes() {
  // prettier-ignore
  const { data: currentUserInfo, loading: loadingCurrentUser, error: currentUserError } = useQuery(CURRENT_USER);

  if (loadingCurrentUser) return 'Loading...';
  if (currentUserError) return `Error! ${currentUserError.message}`;
  const currentUser = currentUserInfo.currentUser;

  return (
    <div>
      <NavBar />
      <Switch>
        <Route
          exact
          path='/home'
          render={(props) => <Home {...props} currentUser={currentUser} />}
        />
        <Route
          exact
          path='/auth/signin'
          component={SignIn}
          render={(props) => <SignIn {...props} currentUser={currentUser} />}
        />
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

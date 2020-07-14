import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './views/Home';
import { SignIn } from './views/SignIn';
import { SignUp } from './views/SignUp';
import { NoMatch } from './views/NoMatch';
import { NavBar } from './components/NavBar';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CURRENT_USER = gql`
  {
    currentUser {
      id
      username
      firstName
      lastName
    }
  }
`;

function Routes() {
  const { data: userInfo, loading, error } = useQuery(CURRENT_USER);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const currentUser = userInfo.currentUser;

  return (
    <div>
      <NavBar />
      <Switch>
        <Route
          exact
          path='/home'
          render={(props) => <Home {...props} currentUser={currentUser} />}
        />
        <Route exact path='/auth/signin' component={SignIn} />
        <Route exact path='/'>
          <Redirect to='/auth/signin' />
        </Route>
        <Route exact path='/auth/signup' component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Routes;

import React from 'react';
import { UserInfo } from '../../components/UserInfo';
import { useHistory } from 'react-router-dom';

import useCurrentUserQuery from '../../hooks/useCurrenUserQuery';

import './home.scss';

const Home = () => {
  const history = useHistory();
  const { error, loading, currentUser } = useCurrentUserQuery();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  if (!currentUser) history.push('/auth/signin');

  return <div>{currentUser && <UserInfo user={currentUser} />}</div>;
};

export default Home;

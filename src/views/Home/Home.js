import React from 'react';
import { HomeUserInfo as UserInfo } from '../../components/HomeUserInfo';
import { useHistory } from 'react-router-dom';

import './home.scss';

const Home = ({ currentUser }) => {
  const history = useHistory();
  if (!currentUser) history.push('/auth/signin');

  return (
    <div>
      <UserInfo currentUser={currentUser} />
    </div>
  );
};

export default Home;

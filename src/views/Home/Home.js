import React from 'react';
import { HomeUserInfo as UserInfo } from '../../components/HomeUserInfo';

import './home.scss';

const Home = ({ currentUser }) => {
  return (
    <div>
      <UserInfo currentUser={currentUser} />
    </div>
  );
};

export default Home;

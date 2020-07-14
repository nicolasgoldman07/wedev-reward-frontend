import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

export default function LogOutButton() {
  const client = useApolloClient();
  const history = useHistory();
  return (
    <button
      className='navbar-right-list-item logout'
      onClick={() => {
        client.writeData({
          data: { currentUser: null, jwt: null },
        });
        localStorage.clear();
        history.push('/auth/signin');
      }}
    >
      Logout
    </button>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../../components/SignInForm';

import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { useHistory } from 'react-router-dom';

import './signin.scss';

const SIGNIN_MUTATION = gql`
  mutation SignInUser($data: SigninInput!) {
    signInUser(data: $data) {
      user {
        id
        username
        firstName
        lastName
      }
      jwt
      authError
    }
  }
`;

const SignIn = (props) => {
  const client = useApolloClient();
  const history = useHistory();
  const [signInUser, { data: userData }] = useMutation(SIGNIN_MUTATION, {
    onCompleted: (mutationResponse) => {
      const { user, jwt, authError } = mutationResponse.signInUser;
      if (!authError) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('jwt', jwt);
        client.writeData({
          data: { currentUser: user, jwt: jwt },
        });
        history.push('/home');
      }
    },
    onError: (mutationError) => {
      console.log('Mutation Error:', mutationError);
    },
  });

  const authError = !!userData ? userData.signInUser.authError : null;

  return (
    <div className='signin-container'>
      <h2 className='signin-title'>Member login</h2>
      <SignInForm signIn={signInUser} />
      <Link to='/auth/signup' className='without-account'>
        Don't you have an account?
      </Link>
      {!!authError && (
        <p className='authError'>
          Login error: <strong>{authError}</strong>
        </p>
      )}
    </div>
  );
};

export default SignIn;

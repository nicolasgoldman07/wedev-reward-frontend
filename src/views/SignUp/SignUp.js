import React from 'react';

import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { Link } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpForm';
import { useHistory } from 'react-router-dom';

import './signup.scss';

const SIGNUP_MUTATION = gql`
  mutation SignUpUser($data: SignupInput!) {
    signUpUser(data: $data) {
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

const SignUp = (props) => {
  const history = useHistory();
  const client = useApolloClient();

  const [signUpUser, { data: userData }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (mutationResponse) => {
      const { user, jwt, authError } = mutationResponse.signUpUser;
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

  const authError = !!userData ? userData.signUpUser.authError : null;

  return (
    <div className='signup-container'>
      <h2 className='signup-title'>Member registration</h2>
      <SignUpForm signUp={signUpUser} />
      <Link to='/auth/signin' className='already-signedup'>
        Do you already have an account?
      </Link>
      {!!authError && (
        <p className='authError'>
          Register error: <strong>{authError}</strong>
        </p>
      )}
    </div>
  );
};

export default SignUp;

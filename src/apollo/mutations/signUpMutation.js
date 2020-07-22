import gql from 'graphql-tag';

export default gql`
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

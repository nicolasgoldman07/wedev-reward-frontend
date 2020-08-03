import gql from 'graphql-tag'

export default gql`
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
`

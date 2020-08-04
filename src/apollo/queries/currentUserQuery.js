import { gql } from 'apollo-boost'

export default gql`
  {
    currentUser {
      id
      username
      firstName
      lastName
    }
  }
`

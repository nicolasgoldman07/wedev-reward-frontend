import { useApolloClient, useMutation } from '@apollo/react-hooks';
import SIGNIN_MUTATION from '../apollo/mutations/signInMutation';

const useSignInMutation = () => {
  const client = useApolloClient();
  const [mutate, { data, loading, error }] = useMutation(SIGNIN_MUTATION, {
    onCompleted: (mutationResponse) => {
      const { user, jwt, authError } = mutationResponse.signInUser;
      if (!authError) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('jwt', jwt);
        client.writeData({
          data: { currentUser: user, jwt: jwt },
        });
      }
    },
    onError: (mutationError) => {
      console.log('Mutation Error:', mutationError);
    },
  });

  return {
    data,
    loading,
    error,
    signInUser: async ({ username, password }) => {
      const { data } = await mutate({
        variables: {
          data: { username, password },
        },
      });

      return data && data.signInUser;
    },
  };
};
export default useSignInMutation;

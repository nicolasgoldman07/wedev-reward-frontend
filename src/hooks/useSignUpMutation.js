import { useApolloClient, useMutation } from '@apollo/react-hooks';
import SIGNUP_MUTATION from '../apollo/mutations/signUpMutation';

const useSignUpMutation = () => {
  const client = useApolloClient();
  const [mutate, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (mutationResponse) => {
      const { user, jwt, authError } = mutationResponse.signUpUser;
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
    signUpUser: async (input) => {
      const { data } = await mutate({
        variables: {
          data: input,
        },
      });

      return data && data.signUpUser;
    },
  };
};

export default useSignUpMutation;

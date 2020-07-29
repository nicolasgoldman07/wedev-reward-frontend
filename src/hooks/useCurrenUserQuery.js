import { useQuery } from '@apollo/react-hooks';
import CURRENT_USER from '../apollo/queries/currentUserQuery';

const useCurrentUserQuery = () => {
  const { data, loading, error } = useQuery(CURRENT_USER);

  return {
    error,
    loading,
    currentUser: data && data.currentUser,
  };
};

export default useCurrentUserQuery;

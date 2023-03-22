import { useEffect, useState } from 'react';
import { api } from '../api';
import { IVoteItem } from '../lib/interfaces/IVoteItem';

const useFetchCategories = () => {
  const [data, setData] = useState<IVoteItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const { data } = await api.get('votes');
        setData(data.categories);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    return () => abortController.abort();
  }, []);

  return { data, isLoading, error };
};

export default useFetchCategories;
